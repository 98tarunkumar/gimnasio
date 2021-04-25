import React from 'react'
import Corousal from '../../corousal/Corousal'
import {Link} from "react-router-dom"
import tadasana from './tadasana.jpg'
import uttanasana from './uttanasana.jpg'
import Chaturanga from './Chaturanga.jpg'
import Adho from './Adho.jpg'
import Balasana from './Balasana.jpg'

import GifPlayer from 'react-gif-player'

import './Beginmain.css'
function Beginmain() {
    return (
        <div className="yogabegingymmain">
            <div className="beginwelcomegymupper">
            <h1><center>New to yoga? Start here with beginner yoga sequences, tutorials on foundational yoga poses. 
                Build strength and confidence to take your yoga practice deeper.</center></h1></div>
            <div className="asanonebegin">
                <div className="picture">
                {/* <img src="https://thumbs.gfycat.com/GrouchyLastArabianhorse-max-1mb.gif" alt="this slowpoke moves"  width="100%" height="100%" />  */}
                {/* <GifPlayer gif="https://thumbs.gfycat.com/GrouchyLastArabianhorse-max-1mb.gif" still="https://thumbs.gfycat.com/GrouchyLastArabianhorse-max-1mb.gif" />, */}
                <img src={tadasana}loop="infinite" width="100%" height="100%"></img>
                {/* <video controls loop>
  <source src="https://thumbs.gfycat.com/GrouchyLastArabianhorse-max-1mb.gif" type="video/mp4"></source>
  <source src="https://thumbs.gfycat.com/GrouchyLastArabianhorse-max-1mb.gif" type="video/ogg"></source>
  Your browser does not support the video tag.
</video> */}
                </div>
                <div className="descripyoga">
                    <h1><center>TADASANA<br></br>Steps</center></h1>
                    <h2> <br></br>1. Stand on the ground barefoot with your legs and feet joined together.
                 Bend your knees slightly and the straighten them to help loosen your joints.<br></br>
                 <br></br>2. Raise your head, lengthening your neck in the process. 
                 Keep breathing deeply. While inhaling, you will feel the breath travelling 
                 through your toes, stomach and up to the head. As you exhale, feel your breath 
                 going down from the head to the stomach and finally your feet.<br></br>
                 <br></br>3. Breathe in and raise your toes gently and try to balance your body on your heels.
                  Stretch your shoulders, arms and chest upwards while your toes bear your body weight.
                   Feel the stretch in your body from the head to the feet.
                    Hold this pose for about 5 to 10 seconds and then gently exhale.</h2> 
                    <Link to="./stopwatch"><div className="btn btn-info">Stopwatch</div></Link></div>
            </div>
            
            <div className="asantwobegin">
            <div className="picture"> <img src={uttanasana} width="100%" height="100%"></img></div>
                <div className="descripyogatwo">
                    <h1><center>UTTANASANA <br></br>Steps</center></h1>
                    <h2><br></br> 1. On your inhale, lift your arms to the sides and up, over your head.
<br></br><br></br>2. On your exhale, release your arms (either in front of your body or out to the side, like a swan dive) as you fold your torso over your legs. On the first time through, have at least a slight bend in your knees. No matter how flexible you are, your hamstrings will be cold when starting out, and you’ll want to be gentle with them.
<br></br><br></br>3. As you relax into the pose more, begin to straighten your legs as far as feels good. Anything that pinches or is a shooting pain should immediately stop your movement. Let gravity do the work here — don’t pull yourself down and try to force the fold.
<br></br><br></br>4. You can put your hands on your shins, your feet, or the floor. This passively lengthens your spine and your hamstrings, and it’s also a great way to work on balance.</h2> 
<Link to="./stopwatch"><div className="btn btn-info">Stopwatch</div></Link></div>
            </div>
            <div className="asanthreebegin">
                <div className="picture"> <img src={Chaturanga} width="100%" height="100%"></img></div>
                <div className="descripyoga">
                    <h1><center>Plank Pose (Uttihita Chaturanga Dandasana)<br></br>Steps</center></h1>
                    <h2> <br></br>1. From Forward Fold, put your hands flat on the floor, bending your knees as much as needed to do so. Step back one leg at a time, until you’re in a high Plank Pose.
                    <br></br><br></br>2. Press into your hands, keep your legs parallel and engaged, and pull your bellybutton toward your spine.
                    <br></br><br></br>3. Take a few deep breaths here, working your core and your arms.
                    <br></br><br></br>It’s easy to drop a little too much and get “banana back” or to hunch your shoulders. A good way to figure this pose out as a beginner is to get a friend to look at the shape you’re making from the side.

                    <br></br><br></br>Your upper body, from your hands on the floor, up to your hips, should be relatively straight, allowing for some curves due to natural spine curves.</h2> 
                    <Link to="./stopwatch"><div className="btn btn-info">Stopwatch</div></Link></div>

            </div>
            <div className="asantwobegin">
            <div className="picture"> <img src={Adho} width="100%" height="100%"></img></div>
                <div className="descripyogatwo">
                    <h1><center>Adho Mukha Svanasana <br></br>Steps</center></h1>
                    <h2><br></br> 1. From Plank Pose, push into your hands and lift your hips up and back on the inhale. One thing that can be tricky with this pose is, again, keeping your shoulders engaged but not working too hard, and keeping a neutral spine.
                    <br></br><br></br>2. Your legs should be straight, and your heels working toward the floor. There will probably be some space between your heels and the floor. You could be very flexible, but if your legs are a bit on the long side, you probably won’t have your heels all the way to the floor. That’s fine. Keep your legs active and heels reaching toward the ground.
                    <br></br><br></br>3. Your first time in this pose, pedal out your feet a little to warm up your leg muscles.</h2> 
<Link to="./stopwatch"><div className="btn btn-info">Stopwatch</div></Link></div>
        </div>

        <div className="asanonebegin">
                <div className="picture"> <img src={Balasana} width="100%" height="100%"></img></div>
                <div className="descripyoga">
                    <h1><center>Child’s Pose (Balasana)<br></br>Steps</center></h1>
                    <h2> <br></br>1. In Downward-Facing Dog, take a deep breath. On the exhale, release your knees to the floor, pull your hips back to your heels, and rest your forehead on the floor.
                    <br></br><br></br>2. You can either leave your arms stretched in front of you or pull them next to your body, hands resting palms up near your feet.
                    <br></br><br></br>3. This is a restorative pose, so adjust it to your needs. If you want to widen your knees a bit, do so. Like all forward folds, this pose is nurturing. It relaxes your spine, shoulders, and neck, and massages your internal organs.</h2> 
                    <Link to="./stopwatch"><div className="btn btn-info">Stopwatch</div></Link></div>
            </div>

        </div>
    )
}

export default Beginmain
