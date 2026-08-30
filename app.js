const APP_VERSION='1.0.0';
const STORAGE_KEY='soccer-trainer-progress-v1';

const levels=[
{title:'Beginner 1 · Ball Comfort',description:'Build confidence touching and moving the ball.',cue:'Keep corrections simple. Focus on keeping the ball close.',sessions:[
{name:'Session 1 · Ball Confidence',drills:[['Free Dribble',120,'Let her dribble anywhere in the yard. Say: “Lots of little touches and keep the ball close.”'],['Toe Taps',120,'Alternate feet gently touching the top of the ball. Slow is fine.'],['Little Touches',180,'Dribble across the yard using lots of small touches with both feet.'],['Keep Away',180,'You move slowly and try to steal the ball while she protects it and dribbles away.']]},
{name:'Session 2 · Inside Foot Control',drills:[['Free Dribble',120,'Dribble freely using both feet.'],['Foundations',120,'Tap the ball side to side between the inside of both feet.'],['Cone Weave',180,'Use four cones or household objects and weave through them slowly.'],['Red Light, Green Light',180,'She dribbles on green and stops the ball on red.']]},
{name:'Session 3 · Control Challenge',drills:[['Warm-Up Dribble',120,'Easy dribbling with lots of touches.'],['Toe Tap Challenge',120,'Count controlled toe taps. Keep it fun, not perfect.'],['Around the Cones',180,'Circle each cone while keeping the ball close.'],['Beat Dad',180,'Give her a finish line and let her try to dribble past you.']]}
]},
{title:'Beginner 2 · Dribbling',description:'Move with the ball under control.',cue:'Encourage small touches and occasional looks up.',sessions:[
{name:'Session 1 · Small Touches',drills:[['Warm-Up',120,'Free dribble with both feet.'],['Right Foot',120,'Dribble mostly with the right foot.'],['Left Foot',120,'Dribble mostly with the left foot.'],['Cone Race',240,'Dribble through cones and back. Control matters more than speed.']]},
{name:'Session 2 · Change Direction',drills:[['Warm-Up',120,'Free dribble.'],['Stop & Go',180,'Dribble, stop the ball with the sole, then go again.'],['Turn Around',180,'Dribble to a cone, turn, and come back.'],['Red Light Game',120,'Play Red Light, Green Light while dribbling.']]},
{name:'Session 3 · Dribble Game',drills:[['Warm-Up',120,'Easy dribbling.'],['Inside Touches',120,'Move the ball using the inside of each foot.'],['Obstacle Course',180,'Create a short course using shoes or cones.'],['1-on-1 Finish',180,'She tries to dribble around you and cross a finish line.']]}
]},
{title:'Beginner 3 · Turning & Stopping',description:'Stop, turn, and change direction with confidence.',cue:'Praise control more than speed.',sessions:[
{name:'Session 1 · Stop the Ball',drills:[['Warm-Up',120,'Free dribble.'],['Sole Stops',180,'Stop the ball using the bottom of the foot.'],['Go & Stop',180,'Dribble five steps, stop, then go again.'],['Freeze Game',120,'Call freeze at random while she dribbles.']]},
{name:'Session 2 · Turn Back',drills:[['Warm-Up',120,'Free dribble.'],['Pull Back',180,'Place a foot on top of the ball and pull it backward.'],['Cone Turn',180,'Dribble to a cone, pull the ball back, and return.'],['Escape',120,'Approach slowly and have her turn away with the ball.']]},
{name:'Session 3 · Direction Challenge',drills:[['Warm-Up',120,'Free dribble.'],['Left & Right',180,'Call left or right and have her change direction.'],['Cone Course',180,'Combine stops and turns around cones.'],['Mini 1-on-1',120,'Try to cross a line while keeping the ball away from you.']]}
]},
{title:'Beginner 4 · Passing',description:'Learn a controlled inside-foot pass.',cue:'Plant foot beside the ball and pass with the inside of the foot.',sessions:[
{name:'Session 1 · Pass to Dad',drills:[['Warm-Up',120,'Free dribble.'],['Inside Foot Pass',180,'Stand about six feet apart and pass back and forth.'],['Pass Through Gate',180,'Make a small gate with two cones and pass through it.'],['Score the Gate',120,'Earn one point for every pass through the target.']]},
{name:'Session 2 · Receive & Pass',drills:[['Warm-Up',120,'Free dribble.'],['Stop the Pass',180,'Pass to her and have her stop it before passing back.'],['Two-Touch Passing',180,'First touch controls, second touch passes.'],['Target Game',120,'Try to hit a cone or small target with a pass.']]},
{name:'Session 3 · Moving Passes',drills:[['Warm-Up',120,'Free dribble.'],['Pass & Move',180,'After passing, take a few steps to a new spot.'],['Moving Target',180,'You move slowly and she passes the ball to you.'],['Passing Challenge',120,'Count accurate passes you can make together.']]}
]},
{title:'Beginner 5 · First Touch',description:'Control a pass before the next move.',cue:'Soft first touch. The ball should stay close.',sessions:[
{name:'Session 1 · Cushion the Ball',drills:[['Warm-Up',120,'Free dribble.'],['Receive & Stop',180,'Pass gently and have her cushion the ball with the inside of her foot.'],['Receive Right',180,'Control the pass slightly to her right.'],['Pass Back',120,'Control then pass back to you.']]},
{name:'Session 2 · Move the First Touch',drills:[['Warm-Up',120,'Free dribble.'],['Receive Left',180,'Control the pass slightly left.'],['Receive Right',180,'Control the pass slightly right.'],['Choose a Side',120,'Call left or right before you pass.']]},
{name:'Session 3 · First Touch Game',drills:[['Warm-Up',120,'Free dribble.'],['Receive & Dribble',180,'Control your pass then take several dribbling touches.'],['Receive & Pass',180,'Control then pass back.'],['First Touch Challenge',120,'Give one point for every soft, controlled first touch.']]}
]},
{title:'Beginner 6 · Shooting',description:'Learn controlled shooting before adding power.',cue:'Plant foot next to the ball, strike through it, and aim first.',sessions:[
{name:'Session 1 · Basic Shooting',drills:[['Warm-Up',120,'Free dribble.'],['Stationary Shots',180,'Shoot a still ball toward a goal or target.'],['Aim for Corners',180,'Pick left or right before each shot.'],['Five-Shot Game',120,'Count how many of five shots hit the target.']]},
{name:'Session 2 · Dribble & Shoot',drills:[['Warm-Up',120,'Free dribble.'],['Dribble Then Stop',120,'Dribble toward goal and stop the ball.'],['Dribble & Shoot',240,'Take several controlled touches, then shoot.'],['Beat Your Score',120,'Try to improve the number of accurate shots.']]},
{name:'Session 3 · Shooting Game',drills:[['Warm-Up',120,'Free dribble.'],['Left Side Shot',120,'Approach from the left and shoot.'],['Right Side Shot',120,'Approach from the right and shoot.'],['Score on Dad',240,'You play easy goalkeeper while she tries to score.']]}
]},
{title:'Beginner 7 · Protect the Ball',description:'Introduce shielding and simple 1-on-1 play.',cue:'Keep her body between the defender and the ball.',sessions:[
{name:'Session 1 · Shielding',drills:[['Warm-Up',120,'Free dribble.'],['Body Between',180,'She keeps her body between you and a stationary ball.'],['Move & Shield',180,'She dribbles slowly while you apply light pressure.'],['Protect for 10',120,'See if she can protect the ball for ten seconds.']]},
{name:'Session 2 · Escape',drills:[['Warm-Up',120,'Free dribble.'],['Turn Away',180,'Approach slowly and have her turn away with the ball.'],['Find Space',180,'After turning, dribble toward open space.'],['Escape Game',120,'She scores by crossing a line without losing the ball.']]},
{name:'Session 3 · 1-on-1',drills:[['Warm-Up',120,'Free dribble.'],['Attack the Cone',120,'Dribble toward a cone then change direction.'],['Beat Dad',240,'You defend lightly while she tries to dribble around you.'],['Finish on Goal',120,'After getting around you, she shoots.']]}
]},
{title:'Beginner 8 · Put It Together',description:'Combine dribbling, passing, receiving, and shooting.',cue:'Let her make decisions without correcting every touch.',sessions:[
{name:'Session 1 · Dribble & Pass',drills:[['Warm-Up',120,'Free dribble.'],['Dribble to Cone',120,'Dribble to a cone under control.'],['Pass to Dad',180,'After reaching the cone, pass to you.'],['Combination Game',180,'Dribble, pass, move, then receive again.']]},
{name:'Session 2 · Receive & Shoot',drills:[['Warm-Up',120,'Free dribble.'],['Receive Pass',120,'Control a pass from you.'],['Turn to Goal',180,'After receiving, turn toward the goal.'],['Receive & Shoot',180,'Pass to her, she controls it, then shoots.']]},
{name:'Session 3 · Mini Match',drills:[['Warm-Up',120,'Free dribble.'],['Passing Warm-Up',120,'Pass back and forth.'],['1-on-1',180,'Play a simple 1-on-1 game.'],['Mini Match',180,'Play freely. Let her dribble, pass, defend, and shoot.']]}
]}
];

const defaultState={level:0,completedInLevel:0,totalPractices:0};
let state=loadState();
let activeSession=0,activeDrill=0,remaining=0,timerId=null,timerRunning=false;
const $=id=>document.getElementById(id);

function loadState(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));return {...defaultState,...saved};}catch{return {...defaultState};}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function currentLevel(){return levels[Math.min(state.level,levels.length-1)];}
function show(view){for(const id of ['homeView','practiceView','completeView']) $(id).classList.toggle('active',id===view);window.scrollTo({top:0,behavior:'smooth'});}
function renderHome(){
 const level=currentLevel();
 $('version').textContent=`v${APP_VERSION}`;
 $('homeTitle').textContent=level.title;
 $('levelDescription').textContent=level.description;
 $('sessionProgress').textContent=`${state.completedInLevel} / 3`;
 $('progressFill').style.width=`${Math.min(state.completedInLevel/3*100,100)}%`;
 $('levelNumber').textContent=`Level ${state.level+1}`;
 activeSession=Math.min(state.completedInLevel,2);
 $('nextSessionTitle').textContent=level.sessions[activeSession].name;
 $('totalPracticeText').textContent=`${state.totalPractices} practice${state.totalPractices===1?'':'s'} completed`;
 $('sessionList').innerHTML=level.sessions.map((s,i)=>{
   const done=i<state.completedInLevel,next=i===activeSession;
   return `<div class="session-item ${done?'done':''} ${next?'next':''}"><div class="session-icon">${done?'✓':i+1}</div><div class="session-copy"><strong>${s.name}</strong><small>${done?'Completed':next?'Next practice':'Upcoming'}</small></div></div>`;
 }).join('');
}
function stopTimer(){if(timerId)clearInterval(timerId);timerId=null;timerRunning=false;$('timerToggle').textContent='Start Timer';}
function formatTime(s){return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
function renderDrill(){
 stopTimer();
 const level=currentLevel(),session=level.sessions[activeSession],drill=session.drills[activeDrill];
 remaining=drill[1];
 $('drillCounter').textContent=`Drill ${activeDrill+1} of ${session.drills.length}`;
 $('practiceSessionName').textContent=session.name;
 $('drillTitle').textContent=drill[0];
 $('drillInstruction').textContent=drill[2];
 $('timerDisplay').textContent=formatTime(remaining);
 $('coachCue').textContent=level.cue;
 $('nextDrill').textContent=activeDrill===session.drills.length-1?'Finish Practice':'Next Drill';
}
function startPractice(){activeSession=Math.min(state.completedInLevel,2);activeDrill=0;renderDrill();show('practiceView');}
function toggleTimer(){
 if(timerRunning){stopTimer();return;}
 timerRunning=true;$('timerToggle').textContent='Pause Timer';
 timerId=setInterval(()=>{if(remaining>0){remaining--; $('timerDisplay').textContent=formatTime(remaining);}else{stopTimer();}},1000);
}
function nextDrill(){
 const session=currentLevel().sessions[activeSession];
 if(activeDrill<session.drills.length-1){activeDrill++;renderDrill();return;}
 stopTimer();$('completeText').textContent=`${session.name} is done. Nice work!`;show('completeView');
}
function completePractice(){
 state.totalPractices++;
 state.completedInLevel++;
 if(state.completedInLevel>=3){state.completedInLevel=0;if(state.level<levels.length-1)state.level++;}
 saveState();renderHome();show('homeView');
}
function resetProgress(){if(!confirm('Reset all soccer training progress?'))return;state={...defaultState};saveState();renderHome();}

$('startPractice').addEventListener('click',startPractice);
$('timerToggle').addEventListener('click',toggleTimer);
$('nextDrill').addEventListener('click',nextDrill);
$('exitPractice').addEventListener('click',()=>{stopTimer();show('homeView');});
$('savePractice').addEventListener('click',completePractice);
$('repeatPractice').addEventListener('click',()=>{activeDrill=0;renderDrill();show('practiceView');});
$('resetProgress').addEventListener('click',resetProgress);

renderHome();
if('serviceWorker'in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
