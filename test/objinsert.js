export const func = (boolean) => {
    return boolean
}

const includeResultMetadata = func(true) ? {} : { includeResultMetadata: true }

console.log({upsert: true, new: true, ...includeResultMetadata})