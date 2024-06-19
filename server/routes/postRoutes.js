import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration , OpenAIApi} from 'openai';
import {v2 as cloudinary} from 'cloudinary'
import Post from '../mongodb/models/post.js'

dotenv.config();

const router = express.Router();
// adding cloudinary config info
cloudinary.config({
    cloud_name : process.env.ClOULDINARY_CLOUD_NAME,
    api_key : process.env.ClOULDINARY_API_KEY,
    api_secret : process.env.ClOULDINARY_API_SECRET,
})

// getting Post 

router.route('/').get(async(req,res) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({success:true , data:posts})
    } catch (error) {
        res.status(500).json({success:false , message:error})
        
    }
})



router.route('/').post(async(req,res) => {
   try { 
    const { name , prompt , photo } = req.body
    const photoUrl = await cloudinary.uploader.upload(photo)
    // creating photo schema 
    const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url 
    })
    // posting data in database 
    res.status(201).json({success:true, data: newPost});
    } catch(error){
        res.status(500).json({success:false, message:error})
    }
})


export default router 