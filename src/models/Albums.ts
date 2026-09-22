import mongoose from 'mongoose';
const { Schema } = mongoose;

const AlbumSchema = new Schema({
  image: {
    type: String,
    required: true,
  },

  albumName: {
    type: String,
    required: true,
  },

  artist: {
    type: String,
    required: true,
  },

  releaseYear: {
    type: Number,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('album', AlbumSchema);
