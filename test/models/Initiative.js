import mongoose from 'mongoose';

  const InitiativesSchema = new mongoose.Schema({
    _id: [mongoose.Schema.Types.Mixed],
    segNo: String,
    title: String,
    status: String,
    type: String,
    leader: String,
    leaderInternet: String,
    sponsor: [String],
    sponsorInternet: [String],
    executiveChampion: [String],
    executiveChampionInternet: [String],
    executiveChampionReason: [String],
    associatedBusinessUnit: String,
    associatedBusinessUnitOther: String,
    patentInterest: Boolean,
    focusArea: String,
    affiliateName: [String],
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    industryName: String,
    description: String,
    problemStatement: String,
    outcome: String,
    finalOutcome: String,
    SEOTitle: String,
    SEODescription: String,
    SEOKeywords: String,
    coleaders: [String],
    coleadersInternet: [String],
    participants: [String],
    participantsInternet: [String],
    contributors: [String],
    contributorsInternet: [String],    
    ERBReviewerInternet: [String],
    blogURL: String,
    slackURL: String,
    boxURL: String,
    githubURL: String,
    muralURL: String, connectionsURL: String,
    otherCollaborationURL: String,
    mainCollaborationURL: String,
    draftDate: {
      type: Date,
      default: null
    },
    submittedDate: Date,
    approvalMessage: String,
    approvedDate: Date,
    approvedBy: String,
    closeValue: String,
    requestClousureDate: {
      type: Date,
      default: null
    },
    closedDate: {
      type: Date,
      default: null
    },
    closedBy: String,
    requestPublicationDate: {
      type: Date,
      default: null
    },
    publicationSourceURL: String,
    approvedPublicationDate: {
      type: Date,
      default: null
    },
    ERBApproved: String,
    acknowledge: String,
    reportURL: [String],
    reportNo: String,
    finalPublicationDate: {
      type: Date,
      default: null
    },
    finalPublicationBoxURL: String,
    publicationConfidential: String,
    publicationCategory: String,
    publicationDescription: String,
    publicationContributors: [String],
    legacyParticipantType: String,
    legacyAutoApprove: String,
    legacyValue: String,
    lastUpdateDate: Date,
    openCallsForParticipation: Number,
    excludeInCi: Boolean,
    participantsRating: [String],
    ERBReviewerRating: [String],
    affiliateTypeChecked: Boolean,
    isAffiliateFocalApproved: Boolean,
    affType: String,
    lastChangedBy: [String],
    sponsorRegion: String,
    rating: Number,
    ratingComments: String,
    adminComments: String,
    isSprclose: String,
    pubreq: String,
    sponsorMessage: String,
    closedByName: String,
    endDateUpdatedCounter: Number,
    lastBPCheckDate: Date,
    publicBoxURL: String,
    publicBoxFolderId: String,
    boxURL_creating: Boolean,
    publicBoxURL_creating: Boolean,
    showcaseApproved: Boolean,
    showcaseComments: String,
    allowUnlimitedParticipants: String,
    submittedReminder: Boolean
  }, { timestamps: true });
 
  const Initiative = mongoose.model("Initiative", InitiativesSchema, "Initiative");
  module.exports = Initiative;