gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDRobotObjects1_2final = [];

gdjs.Game_32SceneCode.GDSaltoObjects1_2final = [];

gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDRobotObjects1= [];
gdjs.Game_32SceneCode.GDRobotObjects2= [];
gdjs.Game_32SceneCode.GDTerraObjects1= [];
gdjs.Game_32SceneCode.GDTerraObjects2= [];
gdjs.Game_32SceneCode.GDOrangeGrass9patchObjects1= [];
gdjs.Game_32SceneCode.GDOrangeGrass9patchObjects2= [];
gdjs.Game_32SceneCode.GDStone9patchObjects1= [];
gdjs.Game_32SceneCode.GDStone9patchObjects2= [];
gdjs.Game_32SceneCode.GDWood9patchObjects1= [];
gdjs.Game_32SceneCode.GDWood9patchObjects2= [];
gdjs.Game_32SceneCode.GDPinkGrass9patchObjects1= [];
gdjs.Game_32SceneCode.GDPinkGrass9patchObjects2= [];
gdjs.Game_32SceneCode.GDLeaves9patchObjects1= [];
gdjs.Game_32SceneCode.GDLeaves9patchObjects2= [];
gdjs.Game_32SceneCode.GDGoldPlatformObjects1= [];
gdjs.Game_32SceneCode.GDGoldPlatformObjects2= [];
gdjs.Game_32SceneCode.GDStonePlatformObjects1= [];
gdjs.Game_32SceneCode.GDStonePlatformObjects2= [];
gdjs.Game_32SceneCode.GDPiattaforma_9595di_9595LegnoObjects1= [];
gdjs.Game_32SceneCode.GDPiattaforma_9595di_9595LegnoObjects2= [];
gdjs.Game_32SceneCode.GDMonetaObjects1= [];
gdjs.Game_32SceneCode.GDMonetaObjects2= [];
gdjs.Game_32SceneCode.GDCieloObjects1= [];
gdjs.Game_32SceneCode.GDCieloObjects2= [];
gdjs.Game_32SceneCode.GDDoorObjects1= [];
gdjs.Game_32SceneCode.GDDoorObjects2= [];
gdjs.Game_32SceneCode.GDDoor2Objects1= [];
gdjs.Game_32SceneCode.GDDoor2Objects2= [];
gdjs.Game_32SceneCode.GDWObjects1= [];
gdjs.Game_32SceneCode.GDWObjects2= [];
gdjs.Game_32SceneCode.GDDestraObjects1= [];
gdjs.Game_32SceneCode.GDDestraObjects2= [];
gdjs.Game_32SceneCode.GDSinistraObjects1= [];
gdjs.Game_32SceneCode.GDSinistraObjects2= [];
gdjs.Game_32SceneCode.GDSaltoObjects1= [];
gdjs.Game_32SceneCode.GDSaltoObjects2= [];
gdjs.Game_32SceneCode.GDZoom_9595InObjects1= [];
gdjs.Game_32SceneCode.GDZoom_9595InObjects2= [];
gdjs.Game_32SceneCode.GDDivideSignObjects1= [];
gdjs.Game_32SceneCode.GDDivideSignObjects2= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects = Hashtable.newFrom({"Robot": gdjs.Game_32SceneCode.GDRobotObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMonetaObjects1Objects = Hashtable.newFrom({"Moneta": gdjs.Game_32SceneCode.GDMonetaObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects = Hashtable.newFrom({"Robot": gdjs.Game_32SceneCode.GDRobotObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoor2Objects1Objects = Hashtable.newFrom({"Door2": gdjs.Game_32SceneCode.GDDoor2Objects1});
gdjs.Game_32SceneCode.asyncCallback12812324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Door2"), gdjs.Game_32SceneCode.GDDoor2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDDoor2Objects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDoor2Objects2[i].getBehavior("Animation").setAnimationName("Closing");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects2[i].deleteFromScene(runtimeScene);
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDDoor2Objects1) asyncObjectsList.addObject("Door2", obj);
for (const obj of gdjs.Game_32SceneCode.GDRobotObjects1) asyncObjectsList.addObject("Robot", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12812324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.asyncCallback12815092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Destra"), gdjs.Game_32SceneCode.GDDestraObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects2);

gdjs.copyArray(runtimeScene.getObjects("Sinistra"), gdjs.Game_32SceneCode.GDSinistraObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Game_32SceneCode.GDRobotObjects2[i].getBehavior("Opacity").getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDestraObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDestraObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Game_32SceneCode.GDDestraObjects2[i].getBehavior("Opacity").getOpacity() - (10));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDSinistraObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSinistraObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Game_32SceneCode.GDSinistraObjects2[i].getBehavior("Opacity").getOpacity() - (10));
}
}gdjs.Game_32SceneCode.localVariables.length = 0;
}
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Game_32SceneCode.localVariables);
for (const obj of gdjs.Game_32SceneCode.GDRobotObjects1) asyncObjectsList.addObject("Robot", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Game_32SceneCode.asyncCallback12815092(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects = Hashtable.newFrom({"Robot": gdjs.Game_32SceneCode.GDRobotObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoor2Objects1Objects = Hashtable.newFrom({"Door2": gdjs.Game_32SceneCode.GDDoor2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWObjects1Objects = Hashtable.newFrom({"W": gdjs.Game_32SceneCode.GDWObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects = Hashtable.newFrom({"Robot": gdjs.Game_32SceneCode.GDRobotObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoor2Objects1Objects = Hashtable.newFrom({"Door2": gdjs.Game_32SceneCode.GDDoor2Objects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSinistraObjects1Objects = Hashtable.newFrom({"Sinistra": gdjs.Game_32SceneCode.GDSinistraObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDestraObjects1Objects = Hashtable.newFrom({"Destra": gdjs.Game_32SceneCode.GDDestraObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSaltoObjects1Objects = Hashtable.newFrom({"Salto": gdjs.Game_32SceneCode.GDSaltoObjects1});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 3, "Background", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Moneta"), gdjs.Game_32SceneCode.GDMonetaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDMonetaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDMonetaObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMonetaObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMonetaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "8-Bit Coin Sound Effect (Copyright Free).wav", false, 35, gdjs.randomFloatInRange(2, 2.2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").getAnimationName() == "Running" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12804780);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Footsteps Sfx Free.wav", 1, true, 250, gdjs.randomFloatInRange(1.1, 1.2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12809772);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "8-Bit Jump Sound Effect (Copyright Free).wav", false, 50, gdjs.randomFloatInRange(1, 1.2));
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door2"), gdjs.Game_32SceneCode.GDDoor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);
gdjs.Game_32SceneCode.GDSaltoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoor2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Game_32SceneCode.GDSaltoObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
isConditionTrue_2 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Salto"), gdjs.Game_32SceneCode.GDSaltoObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSaltoObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSaltoObjects2[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Game_32SceneCode.GDSaltoObjects2[k] = gdjs.Game_32SceneCode.GDSaltoObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSaltoObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDSaltoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDSaltoObjects1_2final.indexOf(gdjs.Game_32SceneCode.GDSaltoObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDSaltoObjects1_2final.push(gdjs.Game_32SceneCode.GDSaltoObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDSaltoObjects1_2final, gdjs.Game_32SceneCode.GDSaltoObjects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDoor2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("W"), gdjs.Game_32SceneCode.GDWObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDoor2Objects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDoor2Objects1[i].getBehavior("Animation").setAnimationName("Opening");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door2"), gdjs.Game_32SceneCode.GDDoor2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDoor2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDoor2Objects1[i].getBehavior("Animation").getAnimationName() == "Opening" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDoor2Objects1[k] = gdjs.Game_32SceneCode.GDDoor2Objects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDoor2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").setAcceleration(0);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door2"), gdjs.Game_32SceneCode.GDDoor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoor2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12816916);
}
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDWObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWObjects1Objects, 1040, 152, "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWObjects1[i].getBehavior("Scale").setScale(gdjs.Game_32SceneCode.GDWObjects1[i].getBehavior("Scale").getScale() - (0.2));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWObjects1[i].getBehavior("Resizable").setWidth(gdjs.Game_32SceneCode.GDWObjects1[i].getBehavior("Resizable").getWidth() + (1));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWObjects1[i].getBehavior("Resizable").setHeight(gdjs.Game_32SceneCode.GDWObjects1[i].getBehavior("Resizable").getHeight() + (1));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWObjects1[i].getBehavior("Opacity").setOpacity(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door2"), gdjs.Game_32SceneCode.GDDoor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDRobotObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoor2Objects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12818692);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("W"), gdjs.Game_32SceneCode.GDWObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Destra"), gdjs.Game_32SceneCode.GDDestraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDestraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDDestraObjects1[k] = gdjs.Game_32SceneCode.GDDestraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDestraObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDestraObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDestraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Destra"), gdjs.Game_32SceneCode.GDDestraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDestraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("ButtonFSM").IsPressedOutside((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDestraObjects1[k] = gdjs.Game_32SceneCode.GDDestraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDestraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDestraObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDestraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("Animation").setAnimationName("Static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Destra"), gdjs.Game_32SceneCode.GDDestraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDestraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDestraObjects1[k] = gdjs.Game_32SceneCode.GDDestraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDestraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDestraObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDestraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("Animation").setAnimationName("Static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sinistra"), gdjs.Game_32SceneCode.GDSinistraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSinistraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("ButtonFSM").IsPressedOutside((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDSinistraObjects1[k] = gdjs.Game_32SceneCode.GDSinistraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSinistraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDSinistraObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSinistraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("Animation").setAnimationName("Static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sinistra"), gdjs.Game_32SceneCode.GDSinistraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSinistraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDSinistraObjects1[k] = gdjs.Game_32SceneCode.GDSinistraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSinistraObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDSinistraObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSinistraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sinistra"), gdjs.Game_32SceneCode.GDSinistraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSinistraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDSinistraObjects1[k] = gdjs.Game_32SceneCode.GDSinistraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSinistraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDSinistraObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDSinistraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("Animation").setAnimationName("Static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Salto"), gdjs.Game_32SceneCode.GDSaltoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSaltoObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSaltoObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDSaltoObjects1[k] = gdjs.Game_32SceneCode.GDSaltoObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSaltoObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Destra"), gdjs.Game_32SceneCode.GDDestraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Salto"), gdjs.Game_32SceneCode.GDSaltoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSaltoObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSaltoObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDSaltoObjects1[k] = gdjs.Game_32SceneCode.GDSaltoObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSaltoObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDestraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDDestraObjects1[k] = gdjs.Game_32SceneCode.GDDestraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDestraObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDRobotObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").getAnimationName() == "Running" ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDRobotObjects1[k] = gdjs.Game_32SceneCode.GDRobotObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Game_32SceneCode.GDRobotObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDRobotObjects1, gdjs.Game_32SceneCode.GDRobotObjects2);

for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_2 = true;
        gdjs.Game_32SceneCode.GDRobotObjects2[k] = gdjs.Game_32SceneCode.GDRobotObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDRobotObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDRobotObjects1_2final.indexOf(gdjs.Game_32SceneCode.GDRobotObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDRobotObjects1_2final.push(gdjs.Game_32SceneCode.GDRobotObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDRobotObjects1, gdjs.Game_32SceneCode.GDRobotObjects2);

for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDRobotObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDRobotObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_2 = true;
        gdjs.Game_32SceneCode.GDRobotObjects2[k] = gdjs.Game_32SceneCode.GDRobotObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDRobotObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Game_32SceneCode.GDRobotObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32SceneCode.GDRobotObjects1_2final.indexOf(gdjs.Game_32SceneCode.GDRobotObjects2[j]) === -1 )
            gdjs.Game_32SceneCode.GDRobotObjects1_2final.push(gdjs.Game_32SceneCode.GDRobotObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDRobotObjects1_2final, gdjs.Game_32SceneCode.GDRobotObjects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDRobotObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12830884);
}
}
if (isConditionTrue_0) {
gdjs.Game_32SceneCode.GDDestraObjects1.length = 0;

gdjs.Game_32SceneCode.GDSaltoObjects1.length = 0;

gdjs.Game_32SceneCode.GDSinistraObjects1.length = 0;

{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "Background", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSinistraObjects1Objects, 100, 750, "Controls");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDSinistraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("Resizable").setSize(300, 300);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDestraObjects1Objects, 450, 750, "Controls");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDestraObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("Resizable").setSize(300, 300);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDSaltoObjects1Objects, 1750, -(60), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDSaltoObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSaltoObjects1[i].getBehavior("Resizable").setSize(4000, 4000);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDSaltoObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDSaltoObjects1[i].setLayer("Controls");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Destra"), gdjs.Game_32SceneCode.GDDestraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sinistra"), gdjs.Game_32SceneCode.GDSinistraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDSinistraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDSinistraObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDSinistraObjects1[k] = gdjs.Game_32SceneCode.GDSinistraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDSinistraObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDestraObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDestraObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32SceneCode.GDDestraObjects1[k] = gdjs.Game_32SceneCode.GDDestraObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDestraObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Robot"), gdjs.Game_32SceneCode.GDRobotObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDRobotObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDRobotObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDRobotObjects1.length = 0;
gdjs.Game_32SceneCode.GDRobotObjects2.length = 0;
gdjs.Game_32SceneCode.GDTerraObjects1.length = 0;
gdjs.Game_32SceneCode.GDTerraObjects2.length = 0;
gdjs.Game_32SceneCode.GDOrangeGrass9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDOrangeGrass9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDStone9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDStone9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDWood9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDWood9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDPinkGrass9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDPinkGrass9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeaves9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeaves9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDGoldPlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDGoldPlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDStonePlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDStonePlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDPiattaforma_9595di_9595LegnoObjects1.length = 0;
gdjs.Game_32SceneCode.GDPiattaforma_9595di_9595LegnoObjects2.length = 0;
gdjs.Game_32SceneCode.GDMonetaObjects1.length = 0;
gdjs.Game_32SceneCode.GDMonetaObjects2.length = 0;
gdjs.Game_32SceneCode.GDCieloObjects1.length = 0;
gdjs.Game_32SceneCode.GDCieloObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects1.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoor2Objects1.length = 0;
gdjs.Game_32SceneCode.GDDoor2Objects2.length = 0;
gdjs.Game_32SceneCode.GDWObjects1.length = 0;
gdjs.Game_32SceneCode.GDWObjects2.length = 0;
gdjs.Game_32SceneCode.GDDestraObjects1.length = 0;
gdjs.Game_32SceneCode.GDDestraObjects2.length = 0;
gdjs.Game_32SceneCode.GDSinistraObjects1.length = 0;
gdjs.Game_32SceneCode.GDSinistraObjects2.length = 0;
gdjs.Game_32SceneCode.GDSaltoObjects1.length = 0;
gdjs.Game_32SceneCode.GDSaltoObjects2.length = 0;
gdjs.Game_32SceneCode.GDZoom_9595InObjects1.length = 0;
gdjs.Game_32SceneCode.GDZoom_9595InObjects2.length = 0;
gdjs.Game_32SceneCode.GDDivideSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDDivideSignObjects2.length = 0;

gdjs.Game_32SceneCode.eventsList2(runtimeScene);
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDRobotObjects1.length = 0;
gdjs.Game_32SceneCode.GDRobotObjects2.length = 0;
gdjs.Game_32SceneCode.GDTerraObjects1.length = 0;
gdjs.Game_32SceneCode.GDTerraObjects2.length = 0;
gdjs.Game_32SceneCode.GDOrangeGrass9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDOrangeGrass9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDStone9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDStone9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDWood9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDWood9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDPinkGrass9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDPinkGrass9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeaves9patchObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeaves9patchObjects2.length = 0;
gdjs.Game_32SceneCode.GDGoldPlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDGoldPlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDStonePlatformObjects1.length = 0;
gdjs.Game_32SceneCode.GDStonePlatformObjects2.length = 0;
gdjs.Game_32SceneCode.GDPiattaforma_9595di_9595LegnoObjects1.length = 0;
gdjs.Game_32SceneCode.GDPiattaforma_9595di_9595LegnoObjects2.length = 0;
gdjs.Game_32SceneCode.GDMonetaObjects1.length = 0;
gdjs.Game_32SceneCode.GDMonetaObjects2.length = 0;
gdjs.Game_32SceneCode.GDCieloObjects1.length = 0;
gdjs.Game_32SceneCode.GDCieloObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects1.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoor2Objects1.length = 0;
gdjs.Game_32SceneCode.GDDoor2Objects2.length = 0;
gdjs.Game_32SceneCode.GDWObjects1.length = 0;
gdjs.Game_32SceneCode.GDWObjects2.length = 0;
gdjs.Game_32SceneCode.GDDestraObjects1.length = 0;
gdjs.Game_32SceneCode.GDDestraObjects2.length = 0;
gdjs.Game_32SceneCode.GDSinistraObjects1.length = 0;
gdjs.Game_32SceneCode.GDSinistraObjects2.length = 0;
gdjs.Game_32SceneCode.GDSaltoObjects1.length = 0;
gdjs.Game_32SceneCode.GDSaltoObjects2.length = 0;
gdjs.Game_32SceneCode.GDZoom_9595InObjects1.length = 0;
gdjs.Game_32SceneCode.GDZoom_9595InObjects2.length = 0;
gdjs.Game_32SceneCode.GDDivideSignObjects1.length = 0;
gdjs.Game_32SceneCode.GDDivideSignObjects2.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
