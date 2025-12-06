// Use npm install @cantoo/pdf-lib, as more maintained
// Still need npm install @pdf-lib/fontkit
import { PDFDocument } from  '@cantoo/pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs';

(async () => {
    try {

        const fillPdf = async (templatePath, input, output) =>  {
            // Load the existing PDF template
            const existingPdfBytes = fs.readFileSync(templatePath);
            const pdfDoc = await PDFDocument.load(existingPdfBytes);
            pdfDoc.registerFontkit(fontkit);

            let arrFont = []

            for (const font of [...new Set(input.map(i => i.font))]) {
                const fontBytes = fs.readFileSync(font);
                arrFont.push({id: font, func: await pdfDoc.embedFont(fontBytes)});    
            }

            // Get the form from the PDF
            const form = pdfDoc.getForm()

            // Loop through the substitutions, make to the form names in templates and then replace the default text for that key
            for (const { id, label, font, multilineCheck } of input) {
                const field = form.getTextField(id)
                if (field) {
                    const defaultText = field.getText() ?? '';
                    let sub = label
                    if (defaultText.length > 1) {
                        const pattern = new RegExp(`{{${id}}}`)
                        sub = defaultText.replace(pattern, sub)
                    }                
                    // If total characters less than 42 characters, force disabling of multiline so will vertically align
                    const MAX_LIMIT_CHARS = 42;
                    if (field.isMultiline() && multilineCheck) {
                        if (sub.length < MAX_LIMIT_CHARS) field.disableMultiline(); 
                    }

                    field.setText(sub);
                    field.updateAppearances(arrFont.find(i => i.id === font).func);
                }   
            }
            
            // Optionally "flatten" the form to make the data permanent and uneditable
            form.flatten();

            // Serialize the PDFDocument to bytes
            const pdfBytes = await pdfDoc.save({ updateFieldAppearances: false });

            // Write the filled PDF to a new file
            fs.writeFileSync(output, pdfBytes);
        }

        const chapterSIGInput = [
            {   id: "name", 
                label: "Bulgaria Technology Vitality Affiliate", 
                multilineCheck: true,
                font: "edwardianscriptitc.ttf"
            }, 
            {   id: "title", 
                label:  "2025 DISTINGUISHED",
                multilineCheck: false,
                font: "IBMPlexSans.ttf"
            },
            {   id: "standing",
                label: "Distinguished",
                multilineCheck: false,
                font:"IBMPlexSans.ttf"
            }
        ]

        // Build Chapter/SIG certificate
        //const buildPDFChapterSIG = await fillPdf("chapterSIGTemplate.pdf", chapterSIGInput,"ChapterSIGCertificate.pdf")

        const chapterSIGLeaderInput = [
            {   id: "name", 
                label: "Edgar Codero", 
                chapterSIG: "Austin Technical Vitality Council",
                multilineCheck: true,
                font: "edwardianscriptitc.ttf"
            }, 
            {   id: "chapterSIG", 
                label: "Austin Technical Vitality Council",
                multilineCheck: true,
                font: "edwardianscriptitc.ttf"
            },             
            {   id: "title", 
                label:  "2025 DISTINGUISHED",
                multilineCheck: false,
                font: "IBMPlexSans.ttf"
            },
            {   id: "standing",
                label: "Distinguished",
                multilineCheck: false,
                font:"IBMPlexSans.ttf"
            }
        ]

        // Build Chapter/SIG leader certificate
        //const buildPDFChapterSIGLeader = await fillPdf("ChapterSIGLeaderTemplate.pdf",chapterSIGLeaderInput, "ChapterSIGCertificateLeader.pdf")

        const collaboratorBadgeInput = [
            {   id: "title", 
                label: "SILVER", 
                multilineCheck: false,
                font: "IBMPlexSans.ttf"
            }, 
            {   id: "name", 
                label: "Wynter Chen",
                multilineCheck: false,
                font: "edwardianscriptitc.ttf"
            },             
            {   id: "level", 
                label:  "Silver",
                multilineCheck: false,
                font: "IBMPlexSans.ttf"
            }
        ]

        // Build Chapter/SIG leader certificate
        const buildPDFCollaboratorBadge = await fillPdf("CollaboratorBadgeTemplate.pdf",collaboratorBadgeInput, "CollaboratorCertificateBadge.pdf")

    } catch(e) {
        console.log(e)
    }
})()