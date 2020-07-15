const express = require('express')
const router = express.Router()
const Post = require('../models/post')

//GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.json({message: error})
    }
})

//CREATE NEW POST
router.post('/',async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (error) {
        res.json({message: error})
    }
})

//FIND AND GET A SPESIFIC POST
router.get('/:postId', async (req,res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        res.json({message: error})
    }
})

//DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({
            _id: req.params.postId
        })
        res,json(removedPost)
    } catch (error) {
        res.json({message: 'the post has been deleted'})
    }
})

//UPDATE A SPECIFIC POST WITH PATCH
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set:{title: req.body.title}}
        )
        res.json(updatedPost)
    } catch (error) {
        res.json({message:error})
    }
})

//UPDATE A SPECIFIC POST WITH POST 
router.post('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {
                title: req.body.title,
                description: req.body.description
            }
        )
        res.json(updatedPost)
    } catch (error) {
        res.json({message:error})
    }
})

module.exports = router