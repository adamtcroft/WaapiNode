export enum WwiseFunctions {
    executeActionOnEvent = "ak.soundengine.executeActionOnEvent",
    postEvent = "ak.soundengine.postEvent",
    postMsgMonitor = "ak.soundengine.postMsgMonitor",
    postTrigger = "ak.soundengine.postTrigger",
    registerGameObj = "ak.soundengine.registerGameObj",
    resetRTPCValue = "ak.soundegine.resetRTPCValue",
    seekOnEvent = "ak.soundengine.seekOnEvent",
    setDefaultListeners = "ak.soundengine.setDefaultListeners",
    setGameObjectAuxSendValues = "ak.soundengine.setGameObjectAuxSendValues",
    setGameObjectOutputBusVolume = "ak.soundengine.setGameObjectOutputBusVolume",
    setListeners = "ak.soundengine.setListeners",
    setListenerSpatialization = "ak.soundengine.setListenerSpatialization",
    setMultiplePositions = "ak.soundengine.setMultiplePositions",
    setObjectObstructionAndOcclusion = "ak.soundengine.setObjectObstructionAndOcclusion",
    setPosition = "ak.soundengine.setPosition",
    setRTPCValue = "ak.soundengine.setRTPCValue",
    setScalingFactor = "ak.soundengine.setScalingFactor",
    setSwitch = "ak.soundengine.setSwitch",
    stopAll = "ak.soundengine.stopAll",
    stopPlayingID = "ak.soundengine.stopPlayingID",
    unregisterGameObj = "ak.soundengine.unregisterGameObj",
    audio_import = "ak.wwise.core.audio.import",
    audio_importTabDelimited = "ak.wwise.core.audio.importTabDelimited",
    getMinMaxPeaksInRegion = "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion",
    getMinMaxPeaksInTrimmedRegion = "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion",
    getInfo = "ak.wwise.core.getInfo",
    copy = "ak.wwise.core.object.copy",
    create = "ak.wwise.core.object.create",
    delete = "ak.wwise.core.object.delete",
    get = "ak.wwise.core.object.get",
    getAttenuationCurve = "ak.wwise.core.object.getAttenuationCurve",
    getPropertyInfo = "ak.wwise.core.object.getPropertyInfo",
    getPropertyNames = "ak.wwise.core.object.getPropertyNames",
    getTypes = "ak.wwise.core.object.getTypes",
    isPropertyEnabled = "ak.wwise.core.object.isPropertyEnabled",
    move = "ak.wwise.core.object.move",
    setAttenuationCurve = "ak.wwise.core.object.setAttenuationCurve",
    setName = "ak.wwise.core.object.setName",
    setNotes = "ak.wwise.core.object.setNotes",
    setProperty = "ak.wwise.core.object.setProperty",
    setReference = "ak.wwise.core.object.setReference",
    save = "ak.wwise.core.project.save",
    remote_connect = "ak.wwise.core.remote.connect",
    remote_disconnect = "ak.wwise.core.remote.disconnect",
    getAvailableConsoles = "ak.wwise.core.remote.getAvailableConsoles",
    getConnectionStatus = "ak.wwise.core.remote.getConnectionStatus",
    soundbank_getInclusions = "ak.wwise.core.soundbank.getInclusions",
    soundbank_setInclusions = "ak.wwise.core.soundbank.setInclusions",
    switchContainer_addAssignment = "ak.wwise.core.switchContainer.addAssignment",
    switchContainer_getAssignments = "ak.wwise.core.switchContainer.getdAssignments",
    switchContainer_removeAssignment = "ak.wwise.core.switchContainer.removeAssignment",
    transport_create = "ak.wwise.core.transport.create",
    transport_destroy = "ak.wwise.core.transport.destroy",
    transport_executeAction = "ak.wwise.core.transport.executeAction",
    transport_getList = "ak.wwise.core.transport.getList",
    transport_getState = "ak.wwise.core.transport.getState",
    undo_beginGroup = "ak.wwise.core.undo.beginGroup",
    undo_cancelGroup = "ak.wwise.core.undo.cancelGroup",
    undo_endGroup = "ak.wwise.core.undo.endGroup",
    debug_enableAsserts = "ak.wwise.debug.enableAsserts",
    debug_testAssert = "ak.wwise.debug.testAssert",
    ui_bringToForeground = "ak.wwise.ui.bringToForeground",
    commandsExecute = "ak.wwise.ui.commands.execute",
    getCommands = "ak.wwise.ui.commands.getCommands",
    getSelectedObjects = "ak.wwise.ui.getSelectedObjects",
    project_close = "ak.wwise.project.close",
    project_open = "ak.wwise.project.open",
}