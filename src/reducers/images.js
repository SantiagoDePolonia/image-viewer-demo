const initialState = [{
        slug_id: "cat1",
        name: "Cat 1",
        url: "/images/cat1.jpg",
        author: "Adam Nowak",
        caption: "Regular short description of the image."
    },{
        slug_id: "cat2",
        name: "Cat 2 - Just catty cat",
        url: "/images/cat2.jpg",
        author: "Adam Kromer",
        caption: "This is just cat."
    },{
        slug_id: "cat3",
        name: "Cat 3 - this another one",
        url: "/images/cat3.jpg",
        author: "Pan Wołodyjowski",
        caption: "Special cat taken by special person."
    },{
        slug_id: "some_md5_78907aa7a8a8a7a8a",
        name: "Cat 4 - very special",
        url: "/images/cat4.jpg",
        author: "Luc",
        caption: "Cat of the year. I like it!"
    },{
        slug_id: "cat5-normal-slug-by-smith",
        name: "Cat 5",
        url: "/images/cat5.jpg",
        author: "Smith",
        caption: "This is the sweetest cat ever existed on the world in the history of cats."
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        case 'DELETE_IMAGE': {
            const newImages = [...state];
            const index = newImages.findIndex((image) => (image.slug_id === action.imageId));
            if(index === -1) {
                return state;
            }
            newImages.splice(index, 1);
            return newImages;
        }
        case 'RENAME_IMAGE': {
            const newImages = [...state];
            const index = newImages.findIndex((image) => (image.slug_id === action.imageId));
            const newImage = {...newImages[index]}
            newImage.name = action.name;
            newImages[index] = newImage;
            return newImages;
        }
        default:
            return state;
    }
}
  