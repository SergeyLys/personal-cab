import mongoose, { Schema } from 'mongoose';

const AddonsSchema = new Schema({
    title: {type: String, require: true},
    image_url: {type: String, require: true}
});

export default mongoose.model('Addons', AddonsSchema);