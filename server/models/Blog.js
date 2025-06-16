const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String, // Cloudinary URL
  imageData: Buffer, // Raw image binary
  imageContentType: String, // MIME type like "image/jpeg"
  createdAt: { type: Date, default: Date.now },
  authorName: {
    type: String,
    default: 'Bharat'  
  },
  authorImage: {
    type: String,
    default: 'https://res.cloudinary.com/dok1a0vcc/image/upload/v1750056915/blog-images/qfapmrmhdxrekp6sg6l2.png'  
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
