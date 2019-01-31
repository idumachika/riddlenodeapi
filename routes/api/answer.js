const express =require('express');

const router = express.Router();

//Load Answer Model
var Answer =require('../../models/Answer')

//@route GET api/riddle/test
//@route POST api/riddle/test
router.get('/test',(req,res)=> res.json({msg:"Riddles works"}));

// create a bear (accessed at POST http://localhost:8080/bears)
router.route('/answer') 

        .post(function(req,res){

            var answer = new Answer();
            answer.answer = req.body.answer;
            

            answer.save(function(err){
                if(err)res.send(err);

                res.json({message:'answer created'})
            });
        })

        // get all the bears (accessed at GET http://localhost:8080/api/bears)
        .get(function(req, res) {
            Answer.find(function(err, answers) {
                if (err)
                    res.send(err);

                res.json(answers);
            });
        });

        // on routes that end in /bears/:bear_id
// ----------------------------------------------------

router.route('/answer/:answer_id')

//get the riddle with that id
.get(function(req,res){
    Answer.findById(req.params.answer_id, function(err,answer){
        if(err)
        res.send(err);
        res.json(answer)
    })
})
//update the  riddle with this id

.put( function(req,res){
    Answer.findById(req.params.answer_id,function(err,answer){

        if(err)
        res.send(err);

        answer.answer = req.body.answer;
        
        answer.save(function(err){
            if(err)res.send(err);
            res.json({message:'Riddle updated'})
        });

    });
})
// delete the bear with this id
.delete(function(req, res) {
    Answer.remove({
        _id: req.params.answer_id
    }, function(err, answer) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});



   





module.exports =router