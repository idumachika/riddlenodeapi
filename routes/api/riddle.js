const express =require('express');

const router = express.Router();

//Load Riddle Model
var Riddle =require('../../models/Riddle')

//@route GET api/riddle/test
//@route POST api/riddle/test
router.get('/test',(req,res)=> res.json({msg:"Riddles works"}));

// create a bear (accessed at POST http://localhost:8080/bears)
router.route('/riddle') 

        .post(function(req,res){

            var riddle = new Riddle();
            riddle.a = req.body.a;
            riddle.b = req.body.b;
            riddle.c = req.body.c;

            riddle.save(function(err){
                if(err)res.send(err);

                res.json({message:'Riddle created'})
            });
        })

        // get all the bears (accessed at GET http://localhost:8080/api/bears)
        .get(function(req, res) {
            Riddle.find(function(err, riddles) {
                if (err)
                    res.send(err);

                res.json(riddles);
            });
        });

        // on routes that end in /bears/:bear_id
// ----------------------------------------------------

router.route('/riddle/:riddle_id')

//get the riddle with that id
.get(function(req,res){
    Riddle.findById(req.params.riddle_id, function(err,riddle){
        if(err)
        res.send(err);
        res.json(riddle)
    })
})
//update the  riddle with this id

.put( function(req,res){
    Riddle.findById(req.params.riddle_id,function(err,riddle){

        if(err)
        res.send(err);

        riddle.a = req.body.a;
        riddle.b = req.body.b;
        riddle.c = req.body.c
        riddle.save(function(err){
            if(err)res.send(err);
            res.json({message:'Riddle updated'})
        });

    });
})
// delete the bear with this id
.delete(function(req, res) {
    Riddle.remove({
        _id: req.params.riddle_id
    }, function(err, riddle) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});



   





module.exports =router