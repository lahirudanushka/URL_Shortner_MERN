import mongoose from 'mongoose';

const urlSchema = mongoose.Schema({
    url: {type:String,required:true},
    surl: {type:String,required:true,unique: true}
})

export default mongoose.model('Url', urlSchema);