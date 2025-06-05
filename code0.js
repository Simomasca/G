gdjs._48Code = {};
gdjs._48Code.localVariables = [];
gdjs._48Code.GDPlayObjects1_1final = [];

gdjs._48Code.GDPlayObjects1_2final = [];

gdjs._48Code.GDSfondoObjects1= [];
gdjs._48Code.GDSfondoObjects2= [];
gdjs._48Code.GDLogoObjects1= [];
gdjs._48Code.GDLogoObjects2= [];
gdjs._48Code.GDTransitionObjects1= [];
gdjs._48Code.GDTransitionObjects2= [];
gdjs._48Code.GDPlayObjects1= [];
gdjs._48Code.GDPlayObjects2= [];
gdjs._48Code.GDSfondo2Objects1= [];
gdjs._48Code.GDSfondo2Objects2= [];


gdjs._48Code.asyncCallback20018028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._48Code.localVariables);
gdjs._48Code.localVariables.length = 0;
}
gdjs._48Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._48Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._48Code.asyncCallback20018028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._48Code.mapOfGDgdjs_9546_959548Code_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs._48Code.GDPlayObjects1});
gdjs._48Code.mapOfGDgdjs_9546_959548Code_9546GDTransitionObjects1Objects = Hashtable.newFrom({"Transition": gdjs._48Code.GDTransitionObjects1});
gdjs._48Code.asyncCallback20072636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._48Code.localVariables);
gdjs._48Code.localVariables.length = 0;
}
gdjs._48Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._48Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs._48Code.asyncCallback20072636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._48Code.asyncCallback20074132 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._48Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Splash", false);
}gdjs._48Code.localVariables.length = 0;
}
gdjs._48Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._48Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._48Code.asyncCallback20074132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._48Code.eventsList3 = function(runtimeScene) {

{

gdjs._48Code.GDPlayObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._48Code.GDPlayObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._48Code.GDPlayObjects2);
for (var i = 0, k = 0, l = gdjs._48Code.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs._48Code.GDPlayObjects2[i].getVariableBoolean(gdjs._48Code.GDPlayObjects2[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_1 = true;
        gdjs._48Code.GDPlayObjects2[k] = gdjs._48Code.GDPlayObjects2[i];
        ++k;
    }
}
gdjs._48Code.GDPlayObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._48Code.GDPlayObjects2.length; j < jLen ; ++j) {
        if ( gdjs._48Code.GDPlayObjects1_1final.indexOf(gdjs._48Code.GDPlayObjects2[j]) === -1 )
            gdjs._48Code.GDPlayObjects1_1final.push(gdjs._48Code.GDPlayObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._48Code.GDPlayObjects1_1final, gdjs._48Code.GDPlayObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs._48Code.GDTransitionObjects1);
{for(var i = 0, len = gdjs._48Code.GDTransitionObjects1.length ;i < len;++i) {
    gdjs._48Code.GDTransitionObjects1[i].getBehavior("Opacity").setOpacity(gdjs._48Code.GDTransitionObjects1[i].getBehavior("Opacity").getOpacity() - (5));
}
}
{ //Subevents
gdjs._48Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._48Code.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs._48Code.GDTransitionObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs._48Code.mapOfGDgdjs_9546_959548Code_9546GDPlayObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs._48Code.mapOfGDgdjs_9546_959548Code_9546GDTransitionObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 4);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._48Code.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._48Code.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs._48Code.GDPlayObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._48Code.GDPlayObjects1[k] = gdjs._48Code.GDPlayObjects1[i];
        ++k;
    }
}
gdjs._48Code.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._48Code.GDPlayObjects1 */
{for(var i = 0, len = gdjs._48Code.GDPlayObjects1.length ;i < len;++i) {
    gdjs._48Code.GDPlayObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._48Code.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._48Code.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs._48Code.GDPlayObjects1[i].getBehavior("ButtonFSM").IsPressedOutside((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._48Code.GDPlayObjects1[k] = gdjs._48Code.GDPlayObjects1[i];
        ++k;
    }
}
gdjs._48Code.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._48Code.GDPlayObjects1 */
{for(var i = 0, len = gdjs._48Code.GDPlayObjects1.length ;i < len;++i) {
    gdjs._48Code.GDPlayObjects1[i].getBehavior("Animation").setAnimationName("Static");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._48Code.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._48Code.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs._48Code.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._48Code.GDPlayObjects1[k] = gdjs._48Code.GDPlayObjects1[i];
        ++k;
    }
}
gdjs._48Code.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._48Code.GDPlayObjects1 */
{for(var i = 0, len = gdjs._48Code.GDPlayObjects1.length ;i < len;++i) {
    gdjs._48Code.GDPlayObjects1[i].getBehavior("Animation").setAnimationName("Static");
}
}{for(var i = 0, len = gdjs._48Code.GDPlayObjects1.length ;i < len;++i) {
    gdjs._48Code.GDPlayObjects1[i].returnVariable(gdjs._48Code.GDPlayObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}}

}


{

gdjs._48Code.GDPlayObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs._48Code.GDPlayObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._48Code.GDPlayObjects2);
for (var i = 0, k = 0, l = gdjs._48Code.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs._48Code.GDPlayObjects2[i].getVariableBoolean(gdjs._48Code.GDPlayObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_1 = true;
        gdjs._48Code.GDPlayObjects2[k] = gdjs._48Code.GDPlayObjects2[i];
        ++k;
    }
}
gdjs._48Code.GDPlayObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs._48Code.GDPlayObjects2.length; j < jLen ; ++j) {
        if ( gdjs._48Code.GDPlayObjects1_1final.indexOf(gdjs._48Code.GDPlayObjects2[j]) === -1 )
            gdjs._48Code.GDPlayObjects1_1final.push(gdjs._48Code.GDPlayObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._48Code.GDPlayObjects1_1final, gdjs._48Code.GDPlayObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs._48Code.GDTransitionObjects1);
{for(var i = 0, len = gdjs._48Code.GDTransitionObjects1.length ;i < len;++i) {
    gdjs._48Code.GDTransitionObjects1[i].getBehavior("Opacity").setOpacity(gdjs._48Code.GDTransitionObjects1[i].getBehavior("Opacity").getOpacity() + (5));
}
}
{ //Subevents
gdjs._48Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs._48Code.GDTransitionObjects1);
gdjs._48Code.GDPlayObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs._48Code.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs._48Code.GDTransitionObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_1 = true;
        gdjs._48Code.GDTransitionObjects1[k] = gdjs._48Code.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs._48Code.GDTransitionObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs._48Code.GDPlayObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs._48Code.GDPlayObjects2);
for (var i = 0, k = 0, l = gdjs._48Code.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs._48Code.GDPlayObjects2[i].getVariableBoolean(gdjs._48Code.GDPlayObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_2 = true;
        gdjs._48Code.GDPlayObjects2[k] = gdjs._48Code.GDPlayObjects2[i];
        ++k;
    }
}
gdjs._48Code.GDPlayObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs._48Code.GDPlayObjects2.length; j < jLen ; ++j) {
        if ( gdjs._48Code.GDPlayObjects1_2final.indexOf(gdjs._48Code.GDPlayObjects2[j]) === -1 )
            gdjs._48Code.GDPlayObjects1_2final.push(gdjs._48Code.GDPlayObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._48Code.GDPlayObjects1_2final, gdjs._48Code.GDPlayObjects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._48Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs._48Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._48Code.GDSfondoObjects1.length = 0;
gdjs._48Code.GDSfondoObjects2.length = 0;
gdjs._48Code.GDLogoObjects1.length = 0;
gdjs._48Code.GDLogoObjects2.length = 0;
gdjs._48Code.GDTransitionObjects1.length = 0;
gdjs._48Code.GDTransitionObjects2.length = 0;
gdjs._48Code.GDPlayObjects1.length = 0;
gdjs._48Code.GDPlayObjects2.length = 0;
gdjs._48Code.GDSfondo2Objects1.length = 0;
gdjs._48Code.GDSfondo2Objects2.length = 0;

gdjs._48Code.eventsList3(runtimeScene);
gdjs._48Code.GDSfondoObjects1.length = 0;
gdjs._48Code.GDSfondoObjects2.length = 0;
gdjs._48Code.GDLogoObjects1.length = 0;
gdjs._48Code.GDLogoObjects2.length = 0;
gdjs._48Code.GDTransitionObjects1.length = 0;
gdjs._48Code.GDTransitionObjects2.length = 0;
gdjs._48Code.GDPlayObjects1.length = 0;
gdjs._48Code.GDPlayObjects2.length = 0;
gdjs._48Code.GDSfondo2Objects1.length = 0;
gdjs._48Code.GDSfondo2Objects2.length = 0;


return;

}

gdjs['_48Code'] = gdjs._48Code;
