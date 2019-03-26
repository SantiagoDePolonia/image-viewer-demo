export const switchCurrentImage = (imageId) => ({
    type:'SWITCH_CURRENT_IMAGE',
    imageId
});

export const switchCurrentView = (viewType) => ({
    type:'SWITCH_CURRENT_VIEW',
    viewType
});

export const deleteImage = (imageId) => ({
    type:'DELETE_IMAGE',
    imageId
});

export const renameImage = (imageId, name) => ({
    type:'RENAME_IMAGE',
    imageId,
    name
});