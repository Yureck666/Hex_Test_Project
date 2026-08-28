var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.JointSpring' )
  var i1297 = data
  i1296.spring = i1297[0]
  i1296.damper = i1297[1]
  i1296.targetPosition = i1297[2]
  return i1296
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointMotor' )
  var i1299 = data
  i1298.m_TargetVelocity = i1299[0]
  i1298.m_Force = i1299[1]
  i1298.m_FreeSpin = i1299[2]
  return i1298
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1300 = root || request.c( 'UnityEngine.JointLimits' )
  var i1301 = data
  i1300.m_Min = i1301[0]
  i1300.m_Max = i1301[1]
  i1300.m_Bounciness = i1301[2]
  i1300.m_BounceMinVelocity = i1301[3]
  i1300.m_ContactDistance = i1301[4]
  i1300.minBounce = i1301[5]
  i1300.maxBounce = i1301[6]
  return i1300
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.JointDrive' )
  var i1303 = data
  i1302.m_PositionSpring = i1303[0]
  i1302.m_PositionDamper = i1303[1]
  i1302.m_MaximumForce = i1303[2]
  i1302.m_UseAcceleration = i1303[3]
  return i1302
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1305 = data
  i1304.m_Spring = i1305[0]
  i1304.m_Damper = i1305[1]
  return i1304
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1306 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1307 = data
  i1306.m_Limit = i1307[0]
  i1306.m_Bounciness = i1307[1]
  i1306.m_ContactDistance = i1307[2]
  return i1306
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1309 = data
  i1308.m_ExtremumSlip = i1309[0]
  i1308.m_ExtremumValue = i1309[1]
  i1308.m_AsymptoteSlip = i1309[2]
  i1308.m_AsymptoteValue = i1309[3]
  i1308.m_Stiffness = i1309[4]
  return i1308
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1311 = data
  i1310.m_LowerAngle = i1311[0]
  i1310.m_UpperAngle = i1311[1]
  return i1310
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1313 = data
  i1312.m_MotorSpeed = i1313[0]
  i1312.m_MaximumMotorTorque = i1313[1]
  return i1312
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1315 = data
  i1314.m_DampingRatio = i1315[0]
  i1314.m_Frequency = i1315[1]
  i1314.m_Angle = i1315[2]
  return i1314
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1317 = data
  i1316.m_LowerTranslation = i1317[0]
  i1316.m_UpperTranslation = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1319 = data
  i1318.position = new pc.Vec3( i1319[0], i1319[1], i1319[2] )
  i1318.scale = new pc.Vec3( i1319[3], i1319[4], i1319[5] )
  i1318.rotation = new pc.Quat(i1319[6], i1319[7], i1319[8], i1319[9])
  return i1318
}

Deserializers["Hex.Components.HexCell"] = function (request, data, root) {
  var i1320 = root || request.c( 'Hex.Components.HexCell' )
  var i1321 = data
  request.r(i1321[0], i1321[1], 0, i1320, 'highlightRenderer')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'sharedMesh')
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'additionalVertexStreams')
  i1324.enabled = !!i1325[2]
  request.r(i1325[3], i1325[4], 0, i1324, 'sharedMaterial')
  var i1327 = i1325[5]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 2) {
  request.r(i1327[i + 0], i1327[i + 1], 2, i1326, '')
  }
  i1324.sharedMaterials = i1326
  i1324.receiveShadows = !!i1325[6]
  i1324.shadowCastingMode = i1325[7]
  i1324.sortingLayerID = i1325[8]
  i1324.sortingOrder = i1325[9]
  i1324.lightmapIndex = i1325[10]
  i1324.lightmapSceneIndex = i1325[11]
  i1324.lightmapScaleOffset = new pc.Vec4( i1325[12], i1325[13], i1325[14], i1325[15] )
  i1324.lightProbeUsage = i1325[16]
  i1324.reflectionProbeUsage = i1325[17]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'sharedMesh')
  i1330.convex = !!i1331[2]
  i1330.enabled = !!i1331[3]
  i1330.isTrigger = !!i1331[4]
  request.r(i1331[5], i1331[6], 0, i1330, 'material')
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.tagId = i1333[1]
  i1332.enabled = !!i1333[2]
  i1332.isStatic = !!i1333[3]
  i1332.layer = i1333[4]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.halfPrecision = !!i1335[1]
  i1334.useSimplification = !!i1335[2]
  i1334.useUInt32IndexFormat = !!i1335[3]
  i1334.vertexCount = i1335[4]
  i1334.aabb = i1335[5]
  var i1337 = i1335[6]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( !!i1337[i + 0] );
  }
  i1334.streams = i1336
  i1334.vertices = i1335[7]
  var i1339 = i1335[8]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1339[i + 0]) );
  }
  i1334.subMeshes = i1338
  var i1341 = i1335[9]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 16) {
    i1340.push( new pc.Mat4().setData(i1341[i + 0], i1341[i + 1], i1341[i + 2], i1341[i + 3],  i1341[i + 4], i1341[i + 5], i1341[i + 6], i1341[i + 7],  i1341[i + 8], i1341[i + 9], i1341[i + 10], i1341[i + 11],  i1341[i + 12], i1341[i + 13], i1341[i + 14], i1341[i + 15]) );
  }
  i1334.bindposes = i1340
  var i1343 = i1335[10]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1343[i + 0]) );
  }
  i1334.blendShapes = i1342
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1349 = data
  i1348.triangles = i1349[0]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1355 = data
  i1354.name = i1355[0]
  var i1357 = i1355[1]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1357[i + 0]) );
  }
  i1354.frames = i1356
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1358 = root || new pc.UnityMaterial()
  var i1359 = data
  i1358.name = i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'shader')
  i1358.renderQueue = i1359[3]
  i1358.enableInstancing = !!i1359[4]
  var i1361 = i1359[5]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1361[i + 0]) );
  }
  i1358.floatParameters = i1360
  var i1363 = i1359[6]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1363[i + 0]) );
  }
  i1358.colorParameters = i1362
  var i1365 = i1359[7]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1365[i + 0]) );
  }
  i1358.vectorParameters = i1364
  var i1367 = i1359[8]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1367[i + 0]) );
  }
  i1358.textureParameters = i1366
  var i1369 = i1359[9]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1369[i + 0]) );
  }
  i1358.materialFlags = i1368
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1373 = data
  i1372.name = i1373[0]
  i1372.value = i1373[1]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1377 = data
  i1376.name = i1377[0]
  i1376.value = new pc.Color(i1377[1], i1377[2], i1377[3], i1377[4])
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1381 = data
  i1380.name = i1381[0]
  i1380.value = new pc.Vec4( i1381[1], i1381[2], i1381[3], i1381[4] )
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1385 = data
  i1384.name = i1385[0]
  request.r(i1385[1], i1385[2], 0, i1384, 'value')
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1389 = data
  i1388.name = i1389[0]
  i1388.enabled = !!i1389[1]
  return i1388
}

Deserializers["Hex.Components.HexStack"] = function (request, data, root) {
  var i1390 = root || request.c( 'Hex.Components.HexStack' )
  var i1391 = data
  return i1390
}

Deserializers["Hex.Components.HexElement"] = function (request, data, root) {
  var i1392 = root || request.c( 'Hex.Components.HexElement' )
  var i1393 = data
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1395 = data
  i1394.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1395[0], i1394.main)
  i1394.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1395[1], i1394.colorBySpeed)
  i1394.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1395[2], i1394.colorOverLifetime)
  i1394.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1395[3], i1394.emission)
  i1394.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1395[4], i1394.rotationBySpeed)
  i1394.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1395[5], i1394.rotationOverLifetime)
  i1394.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1395[6], i1394.shape)
  i1394.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1395[7], i1394.sizeBySpeed)
  i1394.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1395[8], i1394.sizeOverLifetime)
  i1394.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1395[9], i1394.textureSheetAnimation)
  i1394.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1395[10], i1394.velocityOverLifetime)
  i1394.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1395[11], i1394.noise)
  i1394.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1395[12], i1394.inheritVelocity)
  i1394.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1395[13], i1394.forceOverLifetime)
  i1394.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1395[14], i1394.limitVelocityOverLifetime)
  i1394.useAutoRandomSeed = !!i1395[15]
  i1394.randomSeed = i1395[16]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1396 = root || new pc.ParticleSystemMain()
  var i1397 = data
  i1396.duration = i1397[0]
  i1396.loop = !!i1397[1]
  i1396.prewarm = !!i1397[2]
  i1396.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[3], i1396.startDelay)
  i1396.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[4], i1396.startLifetime)
  i1396.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[5], i1396.startSpeed)
  i1396.startSize3D = !!i1397[6]
  i1396.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[7], i1396.startSizeX)
  i1396.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[8], i1396.startSizeY)
  i1396.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[9], i1396.startSizeZ)
  i1396.startRotation3D = !!i1397[10]
  i1396.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[11], i1396.startRotationX)
  i1396.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[12], i1396.startRotationY)
  i1396.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[13], i1396.startRotationZ)
  i1396.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1397[14], i1396.startColor)
  i1396.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1397[15], i1396.gravityModifier)
  i1396.simulationSpace = i1397[16]
  request.r(i1397[17], i1397[18], 0, i1396, 'customSimulationSpace')
  i1396.simulationSpeed = i1397[19]
  i1396.useUnscaledTime = !!i1397[20]
  i1396.scalingMode = i1397[21]
  i1396.playOnAwake = !!i1397[22]
  i1396.maxParticles = i1397[23]
  i1396.emitterVelocityMode = i1397[24]
  i1396.stopAction = i1397[25]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1398 = root || new pc.MinMaxCurve()
  var i1399 = data
  i1398.mode = i1399[0]
  i1398.curveMin = new pc.AnimationCurve( { keys_flow: i1399[1] } )
  i1398.curveMax = new pc.AnimationCurve( { keys_flow: i1399[2] } )
  i1398.curveMultiplier = i1399[3]
  i1398.constantMin = i1399[4]
  i1398.constantMax = i1399[5]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1400 = root || new pc.MinMaxGradient()
  var i1401 = data
  i1400.mode = i1401[0]
  i1400.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1401[1], i1400.gradientMin)
  i1400.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1401[2], i1400.gradientMax)
  i1400.colorMin = new pc.Color(i1401[3], i1401[4], i1401[5], i1401[6])
  i1400.colorMax = new pc.Color(i1401[7], i1401[8], i1401[9], i1401[10])
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1403 = data
  i1402.mode = i1403[0]
  var i1405 = i1403[1]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1405[i + 0]) );
  }
  i1402.colorKeys = i1404
  var i1407 = i1403[2]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1407[i + 0]) );
  }
  i1402.alphaKeys = i1406
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1408 = root || new pc.ParticleSystemColorBySpeed()
  var i1409 = data
  i1408.enabled = !!i1409[0]
  i1408.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1409[1], i1408.color)
  i1408.range = new pc.Vec2( i1409[2], i1409[3] )
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1413 = data
  i1412.color = new pc.Color(i1413[0], i1413[1], i1413[2], i1413[3])
  i1412.time = i1413[4]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1417 = data
  i1416.alpha = i1417[0]
  i1416.time = i1417[1]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1418 = root || new pc.ParticleSystemColorOverLifetime()
  var i1419 = data
  i1418.enabled = !!i1419[0]
  i1418.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1419[1], i1418.color)
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1420 = root || new pc.ParticleSystemEmitter()
  var i1421 = data
  i1420.enabled = !!i1421[0]
  i1420.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[1], i1420.rateOverTime)
  i1420.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1421[2], i1420.rateOverDistance)
  var i1423 = i1421[3]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1423[i + 0]) );
  }
  i1420.bursts = i1422
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1426 = root || new pc.ParticleSystemBurst()
  var i1427 = data
  i1426.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1427[0], i1426.count)
  i1426.cycleCount = i1427[1]
  i1426.minCount = i1427[2]
  i1426.maxCount = i1427[3]
  i1426.repeatInterval = i1427[4]
  i1426.time = i1427[5]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1428 = root || new pc.ParticleSystemRotationBySpeed()
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[1], i1428.x)
  i1428.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[2], i1428.y)
  i1428.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[3], i1428.z)
  i1428.separateAxes = !!i1429[4]
  i1428.range = new pc.Vec2( i1429[5], i1429[6] )
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1430 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1431 = data
  i1430.enabled = !!i1431[0]
  i1430.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[1], i1430.x)
  i1430.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[2], i1430.y)
  i1430.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1431[3], i1430.z)
  i1430.separateAxes = !!i1431[4]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1432 = root || new pc.ParticleSystemShape()
  var i1433 = data
  i1432.enabled = !!i1433[0]
  i1432.shapeType = i1433[1]
  i1432.randomDirectionAmount = i1433[2]
  i1432.sphericalDirectionAmount = i1433[3]
  i1432.randomPositionAmount = i1433[4]
  i1432.alignToDirection = !!i1433[5]
  i1432.radius = i1433[6]
  i1432.radiusMode = i1433[7]
  i1432.radiusSpread = i1433[8]
  i1432.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1433[9], i1432.radiusSpeed)
  i1432.radiusThickness = i1433[10]
  i1432.angle = i1433[11]
  i1432.length = i1433[12]
  i1432.boxThickness = new pc.Vec3( i1433[13], i1433[14], i1433[15] )
  i1432.meshShapeType = i1433[16]
  request.r(i1433[17], i1433[18], 0, i1432, 'mesh')
  request.r(i1433[19], i1433[20], 0, i1432, 'meshRenderer')
  request.r(i1433[21], i1433[22], 0, i1432, 'skinnedMeshRenderer')
  i1432.useMeshMaterialIndex = !!i1433[23]
  i1432.meshMaterialIndex = i1433[24]
  i1432.useMeshColors = !!i1433[25]
  i1432.normalOffset = i1433[26]
  i1432.arc = i1433[27]
  i1432.arcMode = i1433[28]
  i1432.arcSpread = i1433[29]
  i1432.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1433[30], i1432.arcSpeed)
  i1432.donutRadius = i1433[31]
  i1432.position = new pc.Vec3( i1433[32], i1433[33], i1433[34] )
  i1432.rotation = new pc.Vec3( i1433[35], i1433[36], i1433[37] )
  i1432.scale = new pc.Vec3( i1433[38], i1433[39], i1433[40] )
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1434 = root || new pc.ParticleSystemSizeBySpeed()
  var i1435 = data
  i1434.enabled = !!i1435[0]
  i1434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[1], i1434.x)
  i1434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[2], i1434.y)
  i1434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[3], i1434.z)
  i1434.separateAxes = !!i1435[4]
  i1434.range = new pc.Vec2( i1435[5], i1435[6] )
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1436 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1437 = data
  i1436.enabled = !!i1437[0]
  i1436.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[1], i1436.x)
  i1436.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[2], i1436.y)
  i1436.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[3], i1436.z)
  i1436.separateAxes = !!i1437[4]
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1438 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1439 = data
  i1438.enabled = !!i1439[0]
  i1438.mode = i1439[1]
  i1438.animation = i1439[2]
  i1438.numTilesX = i1439[3]
  i1438.numTilesY = i1439[4]
  i1438.useRandomRow = !!i1439[5]
  i1438.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1439[6], i1438.frameOverTime)
  i1438.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1439[7], i1438.startFrame)
  i1438.cycleCount = i1439[8]
  i1438.rowIndex = i1439[9]
  i1438.flipU = i1439[10]
  i1438.flipV = i1439[11]
  i1438.spriteCount = i1439[12]
  var i1441 = i1439[13]
  var i1440 = []
  for(var i = 0; i < i1441.length; i += 2) {
  request.r(i1441[i + 0], i1441[i + 1], 2, i1440, '')
  }
  i1438.sprites = i1440
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1444 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1445 = data
  i1444.enabled = !!i1445[0]
  i1444.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[1], i1444.x)
  i1444.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[2], i1444.y)
  i1444.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[3], i1444.z)
  i1444.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[4], i1444.radial)
  i1444.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[5], i1444.speedModifier)
  i1444.space = i1445[6]
  i1444.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[7], i1444.orbitalX)
  i1444.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[8], i1444.orbitalY)
  i1444.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[9], i1444.orbitalZ)
  i1444.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[10], i1444.orbitalOffsetX)
  i1444.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[11], i1444.orbitalOffsetY)
  i1444.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[12], i1444.orbitalOffsetZ)
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1446 = root || new pc.ParticleSystemNoise()
  var i1447 = data
  i1446.enabled = !!i1447[0]
  i1446.separateAxes = !!i1447[1]
  i1446.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[2], i1446.strengthX)
  i1446.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[3], i1446.strengthY)
  i1446.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[4], i1446.strengthZ)
  i1446.frequency = i1447[5]
  i1446.damping = !!i1447[6]
  i1446.octaveCount = i1447[7]
  i1446.octaveMultiplier = i1447[8]
  i1446.octaveScale = i1447[9]
  i1446.quality = i1447[10]
  i1446.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[11], i1446.scrollSpeed)
  i1446.scrollSpeedMultiplier = i1447[12]
  i1446.remapEnabled = !!i1447[13]
  i1446.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[14], i1446.remapX)
  i1446.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[15], i1446.remapY)
  i1446.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[16], i1446.remapZ)
  i1446.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[17], i1446.positionAmount)
  i1446.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[18], i1446.rotationAmount)
  i1446.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[19], i1446.sizeAmount)
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1448 = root || new pc.ParticleSystemInheritVelocity()
  var i1449 = data
  i1448.enabled = !!i1449[0]
  i1448.mode = i1449[1]
  i1448.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1449[2], i1448.curve)
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1450 = root || new pc.ParticleSystemForceOverLifetime()
  var i1451 = data
  i1450.enabled = !!i1451[0]
  i1450.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[1], i1450.x)
  i1450.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[2], i1450.y)
  i1450.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1451[3], i1450.z)
  i1450.space = i1451[4]
  i1450.randomized = !!i1451[5]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1452 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1453 = data
  i1452.enabled = !!i1453[0]
  i1452.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[1], i1452.limit)
  i1452.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[2], i1452.limitX)
  i1452.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[3], i1452.limitY)
  i1452.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[4], i1452.limitZ)
  i1452.dampen = i1453[5]
  i1452.separateAxes = !!i1453[6]
  i1452.space = i1453[7]
  i1452.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[8], i1452.drag)
  i1452.multiplyDragByParticleSize = !!i1453[9]
  i1452.multiplyDragByParticleVelocity = !!i1453[10]
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1455 = data
  request.r(i1455[0], i1455[1], 0, i1454, 'mesh')
  i1454.meshCount = i1455[2]
  i1454.activeVertexStreamsCount = i1455[3]
  i1454.alignment = i1455[4]
  i1454.renderMode = i1455[5]
  i1454.sortMode = i1455[6]
  i1454.lengthScale = i1455[7]
  i1454.velocityScale = i1455[8]
  i1454.cameraVelocityScale = i1455[9]
  i1454.normalDirection = i1455[10]
  i1454.sortingFudge = i1455[11]
  i1454.minParticleSize = i1455[12]
  i1454.maxParticleSize = i1455[13]
  i1454.pivot = new pc.Vec3( i1455[14], i1455[15], i1455[16] )
  request.r(i1455[17], i1455[18], 0, i1454, 'trailMaterial')
  i1454.applyActiveColorSpace = !!i1455[19]
  i1454.enabled = !!i1455[20]
  request.r(i1455[21], i1455[22], 0, i1454, 'sharedMaterial')
  var i1457 = i1455[23]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 2) {
  request.r(i1457[i + 0], i1457[i + 1], 2, i1456, '')
  }
  i1454.sharedMaterials = i1456
  i1454.receiveShadows = !!i1455[24]
  i1454.shadowCastingMode = i1455[25]
  i1454.sortingLayerID = i1455[26]
  i1454.sortingOrder = i1455[27]
  i1454.lightmapIndex = i1455[28]
  i1454.lightmapSceneIndex = i1455[29]
  i1454.lightmapScaleOffset = new pc.Vec4( i1455[30], i1455[31], i1455[32], i1455[33] )
  i1454.lightProbeUsage = i1455[34]
  i1454.reflectionProbeUsage = i1455[35]
  return i1454
}

Deserializers["Hex.Components.DisappearParticle"] = function (request, data, root) {
  var i1458 = root || request.c( 'Hex.Components.DisappearParticle' )
  var i1459 = data
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1461 = data
  i1460.name = i1461[0]
  i1460.width = i1461[1]
  i1460.height = i1461[2]
  i1460.mipmapCount = i1461[3]
  i1460.anisoLevel = i1461[4]
  i1460.filterMode = i1461[5]
  i1460.hdr = !!i1461[6]
  i1460.format = i1461[7]
  i1460.wrapMode = i1461[8]
  i1460.alphaIsTransparency = !!i1461[9]
  i1460.alphaSource = i1461[10]
  i1460.graphicsFormat = i1461[11]
  i1460.sRGBTexture = !!i1461[12]
  i1460.desiredColorSpace = i1461[13]
  i1460.wrapU = i1461[14]
  i1460.wrapV = i1461[15]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1463 = data
  i1462.name = i1463[0]
  i1462.atlasId = i1463[1]
  i1462.mipmapCount = i1463[2]
  i1462.hdr = !!i1463[3]
  i1462.size = i1463[4]
  i1462.anisoLevel = i1463[5]
  i1462.filterMode = i1463[6]
  var i1465 = i1463[7]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 4) {
    i1464.push( UnityEngine.Rect.MinMaxRect(i1465[i + 0], i1465[i + 1], i1465[i + 2], i1465[i + 3]) );
  }
  i1462.rects = i1464
  i1462.wrapU = i1463[8]
  i1462.wrapV = i1463[9]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.index = i1469[1]
  i1468.startup = !!i1469[2]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1471 = data
  i1470.aspect = i1471[0]
  i1470.orthographic = !!i1471[1]
  i1470.orthographicSize = i1471[2]
  i1470.backgroundColor = new pc.Color(i1471[3], i1471[4], i1471[5], i1471[6])
  i1470.nearClipPlane = i1471[7]
  i1470.farClipPlane = i1471[8]
  i1470.fieldOfView = i1471[9]
  i1470.depth = i1471[10]
  i1470.clearFlags = i1471[11]
  i1470.cullingMask = i1471[12]
  i1470.rect = i1471[13]
  request.r(i1471[14], i1471[15], 0, i1470, 'targetTexture')
  i1470.usePhysicalProperties = !!i1471[16]
  i1470.focalLength = i1471[17]
  i1470.sensorSize = new pc.Vec2( i1471[18], i1471[19] )
  i1470.lensShift = new pc.Vec2( i1471[20], i1471[21] )
  i1470.gateFit = i1471[22]
  i1470.commandBufferCount = i1471[23]
  i1470.cameraType = i1471[24]
  i1470.enabled = !!i1471[25]
  return i1470
}

Deserializers["Hex.Core.OrthographicCameraFitter"] = function (request, data, root) {
  var i1472 = root || request.c( 'Hex.Core.OrthographicCameraFitter' )
  var i1473 = data
  i1472.requiredWidth = i1473[0]
  i1472.requiredHeight = i1473[1]
  i1472.showOverlay = !!i1473[2]
  return i1472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1475 = data
  i1474.type = i1475[0]
  i1474.color = new pc.Color(i1475[1], i1475[2], i1475[3], i1475[4])
  i1474.cullingMask = i1475[5]
  i1474.intensity = i1475[6]
  i1474.range = i1475[7]
  i1474.spotAngle = i1475[8]
  i1474.shadows = i1475[9]
  i1474.shadowNormalBias = i1475[10]
  i1474.shadowBias = i1475[11]
  i1474.shadowStrength = i1475[12]
  i1474.shadowResolution = i1475[13]
  i1474.lightmapBakeType = i1475[14]
  i1474.renderMode = i1475[15]
  request.r(i1475[16], i1475[17], 0, i1474, 'cookie')
  i1474.cookieSize = i1475[18]
  i1474.shadowNearPlane = i1475[19]
  i1474.occlusionMaskChannel = i1475[20]
  i1474.enabled = !!i1475[21]
  return i1474
}

Deserializers["Hex.Core.GameFlowController"] = function (request, data, root) {
  var i1476 = root || request.c( 'Hex.Core.GameFlowController' )
  var i1477 = data
  request.r(i1477[0], i1477[1], 0, i1476, 'gameSettings')
  request.r(i1477[2], i1477[3], 0, i1476, 'levelData')
  request.r(i1477[4], i1477[5], 0, i1476, 'cellPrefab')
  request.r(i1477[6], i1477[7], 0, i1476, 'stackPrefab')
  request.r(i1477[8], i1477[9], 0, i1476, 'elementPrefab')
  var i1479 = i1477[10]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 2) {
  request.r(i1479[i + 0], i1479[i + 1], 2, i1478, '')
  }
  i1476.hexMaterials = i1478
  var i1481 = i1477[11]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 2) {
  request.r(i1481[i + 0], i1481[i + 1], 2, i1480, '')
  }
  i1476.playerStackTransforms = i1480
  request.r(i1477[12], i1477[13], 0, i1476, 'colorMapping')
  request.r(i1477[14], i1477[15], 0, i1476, 'disappearParticlePrefab')
  request.r(i1477[16], i1477[17], 0, i1476, 'tutorialHand')
  request.r(i1477[18], i1477[19], 0, i1476, 'packshotScreen')
  return i1476
}

Deserializers["Hex.Core.GridManager"] = function (request, data, root) {
  var i1484 = root || request.c( 'Hex.Core.GridManager' )
  var i1485 = data
  return i1484
}

Deserializers["Hex.Core.DragDropController"] = function (request, data, root) {
  var i1486 = root || request.c( 'Hex.Core.DragDropController' )
  var i1487 = data
  request.r(i1487[0], i1487[1], 0, i1486, 'shadowPrefab')
  return i1486
}

Deserializers["Hex.Core.ReactionSystem"] = function (request, data, root) {
  var i1488 = root || request.c( 'Hex.Core.ReactionSystem' )
  var i1489 = data
  return i1488
}

Deserializers["Hex.Core.StackDisappearController"] = function (request, data, root) {
  var i1490 = root || request.c( 'Hex.Core.StackDisappearController' )
  var i1491 = data
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1493 = data
  i1492.pivot = new pc.Vec2( i1493[0], i1493[1] )
  i1492.anchorMin = new pc.Vec2( i1493[2], i1493[3] )
  i1492.anchorMax = new pc.Vec2( i1493[4], i1493[5] )
  i1492.sizeDelta = new pc.Vec2( i1493[6], i1493[7] )
  i1492.anchoredPosition3D = new pc.Vec3( i1493[8], i1493[9], i1493[10] )
  i1492.rotation = new pc.Quat(i1493[11], i1493[12], i1493[13], i1493[14])
  i1492.scale = new pc.Vec3( i1493[15], i1493[16], i1493[17] )
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1495 = data
  i1494.planeDistance = i1495[0]
  i1494.referencePixelsPerUnit = i1495[1]
  i1494.isFallbackOverlay = !!i1495[2]
  i1494.renderMode = i1495[3]
  i1494.renderOrder = i1495[4]
  i1494.sortingLayerName = i1495[5]
  i1494.sortingOrder = i1495[6]
  i1494.scaleFactor = i1495[7]
  request.r(i1495[8], i1495[9], 0, i1494, 'worldCamera')
  i1494.overrideSorting = !!i1495[10]
  i1494.pixelPerfect = !!i1495[11]
  i1494.targetDisplay = i1495[12]
  i1494.overridePixelPerfect = !!i1495[13]
  i1494.enabled = !!i1495[14]
  return i1494
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1497 = data
  i1496.m_UiScaleMode = i1497[0]
  i1496.m_ReferencePixelsPerUnit = i1497[1]
  i1496.m_ScaleFactor = i1497[2]
  i1496.m_ReferenceResolution = new pc.Vec2( i1497[3], i1497[4] )
  i1496.m_ScreenMatchMode = i1497[5]
  i1496.m_MatchWidthOrHeight = i1497[6]
  i1496.m_PhysicalUnit = i1497[7]
  i1496.m_FallbackScreenDPI = i1497[8]
  i1496.m_DefaultSpriteDPI = i1497[9]
  i1496.m_DynamicPixelsPerUnit = i1497[10]
  i1496.m_PresetInfoIsWorld = !!i1497[11]
  return i1496
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1499 = data
  i1498.m_IgnoreReversedGraphics = !!i1499[0]
  i1498.m_BlockingObjects = i1499[1]
  i1498.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1499[2] )
  return i1498
}

Deserializers["Coffee.UISoftMask.CanvasViewChangeTrigger"] = function (request, data, root) {
  var i1500 = root || request.c( 'Coffee.UISoftMask.CanvasViewChangeTrigger' )
  var i1501 = data
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1503 = data
  i1502.cullTransparentMesh = !!i1503[0]
  return i1502
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.UI.Image' )
  var i1505 = data
  request.r(i1505[0], i1505[1], 0, i1504, 'm_Sprite')
  i1504.m_Type = i1505[2]
  i1504.m_PreserveAspect = !!i1505[3]
  i1504.m_FillCenter = !!i1505[4]
  i1504.m_FillMethod = i1505[5]
  i1504.m_FillAmount = i1505[6]
  i1504.m_FillClockwise = !!i1505[7]
  i1504.m_FillOrigin = i1505[8]
  i1504.m_UseSpriteMesh = !!i1505[9]
  i1504.m_PixelsPerUnitMultiplier = i1505[10]
  request.r(i1505[11], i1505[12], 0, i1504, 'm_Material')
  i1504.m_Maskable = !!i1505[13]
  i1504.m_Color = new pc.Color(i1505[14], i1505[15], i1505[16], i1505[17])
  i1504.m_RaycastTarget = !!i1505[18]
  i1504.m_RaycastPadding = new pc.Vec4( i1505[19], i1505[20], i1505[21], i1505[22] )
  return i1504
}

Deserializers["Coffee.UISoftMask.SoftMask"] = function (request, data, root) {
  var i1506 = root || request.c( 'Coffee.UISoftMask.SoftMask' )
  var i1507 = data
  i1506.m_MaskingMode = i1507[0]
  i1506.m_AlphaHitTest = !!i1507[1]
  i1506.m_SoftnessRange = request.d('Coffee.UISoftMaskInternal.MinMax01', i1507[2], i1506.m_SoftnessRange)
  i1506.m_DownSamplingRate = i1507[3]
  i1506.m_AntiAliasingThreshold = i1507[4]
  i1506.m_Alpha = i1507[5]
  i1506.m_Softness = i1507[6]
  i1506.m_PartOfParent = !!i1507[7]
  i1506.m_ShowMaskGraphic = !!i1507[8]
  return i1506
}

Deserializers["Coffee.UISoftMaskInternal.MinMax01"] = function (request, data, root) {
  var i1508 = root || request.c( 'Coffee.UISoftMaskInternal.MinMax01' )
  var i1509 = data
  i1508.m_Min = i1509[0]
  i1508.m_Max = i1509[1]
  return i1508
}

Deserializers["Hex.UI.TutorialOverlay"] = function (request, data, root) {
  var i1510 = root || request.c( 'Hex.UI.TutorialOverlay' )
  var i1511 = data
  request.r(i1511[0], i1511[1], 0, i1510, 'canvasGroup')
  request.r(i1511[2], i1511[3], 0, i1510, 'holeStack')
  request.r(i1511[4], i1511[5], 0, i1510, 'holeTarget')
  request.r(i1511[6], i1511[7], 0, i1510, 'worldReferenceStack')
  request.r(i1511[8], i1511[9], 0, i1510, 'worldReferenceTarget')
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1513 = data
  i1512.m_Alpha = i1513[0]
  i1512.m_Interactable = !!i1513[1]
  i1512.m_BlocksRaycasts = !!i1513[2]
  i1512.m_IgnoreParentGroups = !!i1513[3]
  i1512.enabled = !!i1513[4]
  return i1512
}

Deserializers["Coffee.UISoftMask.MaskingShape"] = function (request, data, root) {
  var i1514 = root || request.c( 'Coffee.UISoftMask.MaskingShape' )
  var i1515 = data
  i1514.m_MaskingMethod = i1515[0]
  i1514.m_ShowMaskGraphic = !!i1515[1]
  i1514.m_AlphaHitTest = !!i1515[2]
  i1514.m_AntiAliasingThreshold = i1515[3]
  i1514.m_SoftnessRange = request.d('Coffee.UISoftMaskInternal.MinMax01', i1515[4], i1514.m_SoftnessRange)
  i1514.m_RaycastMethod = i1515[5]
  return i1514
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1517 = data
  i1516.m_AspectMode = i1517[0]
  i1516.m_AspectRatio = i1517[1]
  return i1516
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_FirstSelected')
  i1518.m_sendNavigationEvents = !!i1519[2]
  i1518.m_DragThreshold = i1519[3]
  return i1518
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1521 = data
  i1520.m_HorizontalAxis = i1521[0]
  i1520.m_VerticalAxis = i1521[1]
  i1520.m_SubmitButton = i1521[2]
  i1520.m_CancelButton = i1521[3]
  i1520.m_InputActionsPerSecond = i1521[4]
  i1520.m_RepeatDelay = i1521[5]
  i1520.m_ForceModuleActive = !!i1521[6]
  i1520.m_SendPointerHoverToParent = !!i1521[7]
  return i1520
}

Deserializers["Hex.Components.TutorialHand"] = function (request, data, root) {
  var i1522 = root || request.c( 'Hex.Components.TutorialHand' )
  var i1523 = data
  request.r(i1523[0], i1523[1], 0, i1522, 'handRenderer')
  request.r(i1523[2], i1523[3], 0, i1522, 'overlay')
  request.r(i1523[4], i1523[5], 0, i1522, 'pointStack')
  request.r(i1523[6], i1523[7], 0, i1522, 'pointTarget')
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1525 = data
  i1524.color = new pc.Color(i1525[0], i1525[1], i1525[2], i1525[3])
  request.r(i1525[4], i1525[5], 0, i1524, 'sprite')
  i1524.flipX = !!i1525[6]
  i1524.flipY = !!i1525[7]
  i1524.drawMode = i1525[8]
  i1524.size = new pc.Vec2( i1525[9], i1525[10] )
  i1524.tileMode = i1525[11]
  i1524.adaptiveModeThreshold = i1525[12]
  i1524.maskInteraction = i1525[13]
  i1524.spriteSortPoint = i1525[14]
  i1524.enabled = !!i1525[15]
  request.r(i1525[16], i1525[17], 0, i1524, 'sharedMaterial')
  var i1527 = i1525[18]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 2) {
  request.r(i1527[i + 0], i1527[i + 1], 2, i1526, '')
  }
  i1524.sharedMaterials = i1526
  i1524.receiveShadows = !!i1525[19]
  i1524.shadowCastingMode = i1525[20]
  i1524.sortingLayerID = i1525[21]
  i1524.sortingOrder = i1525[22]
  i1524.lightmapIndex = i1525[23]
  i1524.lightmapSceneIndex = i1525[24]
  i1524.lightmapScaleOffset = new pc.Vec4( i1525[25], i1525[26], i1525[27], i1525[28] )
  i1524.lightProbeUsage = i1525[29]
  i1524.reflectionProbeUsage = i1525[30]
  return i1524
}

Deserializers["Hex.UI.PackshotScreen"] = function (request, data, root) {
  var i1528 = root || request.c( 'Hex.UI.PackshotScreen' )
  var i1529 = data
  request.r(i1529[0], i1529[1], 0, i1528, 'canvasGroup')
  request.r(i1529[2], i1529[3], 0, i1528, 'clickArea')
  return i1528
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.UI.Button' )
  var i1531 = data
  i1530.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1531[0], i1530.m_OnClick)
  i1530.m_Navigation = request.d('UnityEngine.UI.Navigation', i1531[1], i1530.m_Navigation)
  i1530.m_Transition = i1531[2]
  i1530.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1531[3], i1530.m_Colors)
  i1530.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1531[4], i1530.m_SpriteState)
  i1530.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1531[5], i1530.m_AnimationTriggers)
  i1530.m_Interactable = !!i1531[6]
  request.r(i1531[7], i1531[8], 0, i1530, 'm_TargetGraphic')
  return i1530
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1533 = data
  i1532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1533[0], i1532.m_PersistentCalls)
  return i1532
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1534 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('UnityEngine.Events.PersistentCall', i1537[i + 0]));
  }
  i1534.m_Calls = i1536
  return i1534
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'm_Target')
  i1540.m_TargetAssemblyTypeName = i1541[2]
  i1540.m_MethodName = i1541[3]
  i1540.m_Mode = i1541[4]
  i1540.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1541[5], i1540.m_Arguments)
  i1540.m_CallState = i1541[6]
  return i1540
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1543 = data
  i1542.m_Mode = i1543[0]
  i1542.m_WrapAround = !!i1543[1]
  request.r(i1543[2], i1543[3], 0, i1542, 'm_SelectOnUp')
  request.r(i1543[4], i1543[5], 0, i1542, 'm_SelectOnDown')
  request.r(i1543[6], i1543[7], 0, i1542, 'm_SelectOnLeft')
  request.r(i1543[8], i1543[9], 0, i1542, 'm_SelectOnRight')
  return i1542
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1545 = data
  i1544.m_NormalColor = new pc.Color(i1545[0], i1545[1], i1545[2], i1545[3])
  i1544.m_HighlightedColor = new pc.Color(i1545[4], i1545[5], i1545[6], i1545[7])
  i1544.m_PressedColor = new pc.Color(i1545[8], i1545[9], i1545[10], i1545[11])
  i1544.m_SelectedColor = new pc.Color(i1545[12], i1545[13], i1545[14], i1545[15])
  i1544.m_DisabledColor = new pc.Color(i1545[16], i1545[17], i1545[18], i1545[19])
  i1544.m_ColorMultiplier = i1545[20]
  i1544.m_FadeDuration = i1545[21]
  return i1544
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1547 = data
  request.r(i1547[0], i1547[1], 0, i1546, 'm_HighlightedSprite')
  request.r(i1547[2], i1547[3], 0, i1546, 'm_PressedSprite')
  request.r(i1547[4], i1547[5], 0, i1546, 'm_SelectedSprite')
  request.r(i1547[6], i1547[7], 0, i1546, 'm_DisabledSprite')
  return i1546
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1549 = data
  i1548.m_NormalTrigger = i1549[0]
  i1548.m_HighlightedTrigger = i1549[1]
  i1548.m_PressedTrigger = i1549[2]
  i1548.m_SelectedTrigger = i1549[3]
  i1548.m_DisabledTrigger = i1549[4]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1551 = data
  i1550.ambientIntensity = i1551[0]
  i1550.reflectionIntensity = i1551[1]
  i1550.ambientMode = i1551[2]
  i1550.ambientLight = new pc.Color(i1551[3], i1551[4], i1551[5], i1551[6])
  i1550.ambientSkyColor = new pc.Color(i1551[7], i1551[8], i1551[9], i1551[10])
  i1550.ambientGroundColor = new pc.Color(i1551[11], i1551[12], i1551[13], i1551[14])
  i1550.ambientEquatorColor = new pc.Color(i1551[15], i1551[16], i1551[17], i1551[18])
  i1550.fogColor = new pc.Color(i1551[19], i1551[20], i1551[21], i1551[22])
  i1550.fogEndDistance = i1551[23]
  i1550.fogStartDistance = i1551[24]
  i1550.fogDensity = i1551[25]
  i1550.fog = !!i1551[26]
  request.r(i1551[27], i1551[28], 0, i1550, 'skybox')
  i1550.fogMode = i1551[29]
  var i1553 = i1551[30]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1553[i + 0]) );
  }
  i1550.lightmaps = i1552
  i1550.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1551[31], i1550.lightProbes)
  i1550.lightmapsMode = i1551[32]
  i1550.mixedBakeMode = i1551[33]
  i1550.environmentLightingMode = i1551[34]
  i1550.ambientProbe = new pc.SphericalHarmonicsL2(i1551[35])
  i1550.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1551[36])
  i1550.useReferenceAmbientProbe = !!i1551[37]
  request.r(i1551[38], i1551[39], 0, i1550, 'customReflection')
  request.r(i1551[40], i1551[41], 0, i1550, 'defaultReflection')
  i1550.defaultReflectionMode = i1551[42]
  i1550.defaultReflectionResolution = i1551[43]
  i1550.sunLightObjectId = i1551[44]
  i1550.pixelLightCount = i1551[45]
  i1550.defaultReflectionHDR = !!i1551[46]
  i1550.hasLightDataAsset = !!i1551[47]
  i1550.hasManualGenerate = !!i1551[48]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1557 = data
  request.r(i1557[0], i1557[1], 0, i1556, 'lightmapColor')
  request.r(i1557[2], i1557[3], 0, i1556, 'lightmapDirection')
  request.r(i1557[4], i1557[5], 0, i1556, 'shadowMask')
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1558 = root || new UnityEngine.LightProbes()
  var i1559 = data
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1567 = data
  var i1569 = i1567[0]
  var i1568 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1569.length; i += 1) {
    i1568.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1569[i + 0]));
  }
  i1566.ShaderCompilationErrors = i1568
  i1566.name = i1567[1]
  i1566.guid = i1567[2]
  var i1571 = i1567[3]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( i1571[i + 0] );
  }
  i1566.shaderDefinedKeywords = i1570
  var i1573 = i1567[4]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1573[i + 0]) );
  }
  i1566.passes = i1572
  var i1575 = i1567[5]
  var i1574 = []
  for(var i = 0; i < i1575.length; i += 1) {
    i1574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1575[i + 0]) );
  }
  i1566.usePasses = i1574
  var i1577 = i1567[6]
  var i1576 = []
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1577[i + 0]) );
  }
  i1566.defaultParameterValues = i1576
  request.r(i1567[7], i1567[8], 0, i1566, 'unityFallbackShader')
  i1566.readDepth = !!i1567[9]
  i1566.hasDepthOnlyPass = !!i1567[10]
  i1566.isCreatedByShaderGraph = !!i1567[11]
  i1566.disableBatching = !!i1567[12]
  i1566.compiled = !!i1567[13]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1581 = data
  i1580.shaderName = i1581[0]
  i1580.errorMessage = i1581[1]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1586 = root || new pc.UnityShaderPass()
  var i1587 = data
  i1586.id = i1587[0]
  i1586.subShaderIndex = i1587[1]
  i1586.name = i1587[2]
  i1586.passType = i1587[3]
  i1586.grabPassTextureName = i1587[4]
  i1586.usePass = !!i1587[5]
  i1586.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[6], i1586.zTest)
  i1586.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[7], i1586.zWrite)
  i1586.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[8], i1586.culling)
  i1586.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1587[9], i1586.blending)
  i1586.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1587[10], i1586.alphaBlending)
  i1586.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[11], i1586.colorWriteMask)
  i1586.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[12], i1586.offsetUnits)
  i1586.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[13], i1586.offsetFactor)
  i1586.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[14], i1586.stencilRef)
  i1586.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[15], i1586.stencilReadMask)
  i1586.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1587[16], i1586.stencilWriteMask)
  i1586.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1587[17], i1586.stencilOp)
  i1586.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1587[18], i1586.stencilOpFront)
  i1586.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1587[19], i1586.stencilOpBack)
  var i1589 = i1587[20]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 1) {
    i1588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1589[i + 0]) );
  }
  i1586.tags = i1588
  var i1591 = i1587[21]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 1) {
    i1590.push( i1591[i + 0] );
  }
  i1586.passDefinedKeywords = i1590
  var i1593 = i1587[22]
  var i1592 = []
  for(var i = 0; i < i1593.length; i += 1) {
    i1592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1593[i + 0]) );
  }
  i1586.passDefinedKeywordGroups = i1592
  var i1595 = i1587[23]
  var i1594 = []
  for(var i = 0; i < i1595.length; i += 1) {
    i1594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1595[i + 0]) );
  }
  i1586.variants = i1594
  var i1597 = i1587[24]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1597[i + 0]) );
  }
  i1586.excludedVariants = i1596
  i1586.hasDepthReader = !!i1587[25]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1599 = data
  i1598.val = i1599[0]
  i1598.name = i1599[1]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1601 = data
  i1600.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1601[0], i1600.src)
  i1600.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1601[1], i1600.dst)
  i1600.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1601[2], i1600.op)
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1603 = data
  i1602.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[0], i1602.pass)
  i1602.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[1], i1602.fail)
  i1602.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[2], i1602.zFail)
  i1602.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1603[3], i1602.comp)
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1607 = data
  i1606.name = i1607[0]
  i1606.value = i1607[1]
  return i1606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1611 = data
  var i1613 = i1611[0]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( i1613[i + 0] );
  }
  i1610.keywords = i1612
  i1610.hasDiscard = !!i1611[1]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1617 = data
  i1616.passId = i1617[0]
  i1616.subShaderIndex = i1617[1]
  var i1619 = i1617[2]
  var i1618 = []
  for(var i = 0; i < i1619.length; i += 1) {
    i1618.push( i1619[i + 0] );
  }
  i1616.keywords = i1618
  i1616.vertexProgram = i1617[3]
  i1616.fragmentProgram = i1617[4]
  i1616.exportedForWebGl2 = !!i1617[5]
  i1616.readDepth = !!i1617[6]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1623 = data
  request.r(i1623[0], i1623[1], 0, i1622, 'shader')
  i1622.pass = i1623[2]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1627 = data
  i1626.name = i1627[0]
  i1626.type = i1627[1]
  i1626.value = new pc.Vec4( i1627[2], i1627[3], i1627[4], i1627[5] )
  i1626.textureValue = i1627[6]
  i1626.shaderPropertyFlag = i1627[7]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1629 = data
  i1628.name = i1629[0]
  request.r(i1629[1], i1629[2], 0, i1628, 'texture')
  i1628.aabb = i1629[3]
  i1628.vertices = i1629[4]
  i1628.triangles = i1629[5]
  i1628.textureRect = UnityEngine.Rect.MinMaxRect(i1629[6], i1629[7], i1629[8], i1629[9])
  i1628.packedRect = UnityEngine.Rect.MinMaxRect(i1629[10], i1629[11], i1629[12], i1629[13])
  i1628.border = new pc.Vec4( i1629[14], i1629[15], i1629[16], i1629[17] )
  i1628.transparency = i1629[18]
  i1628.bounds = i1629[19]
  i1628.pixelsPerUnit = i1629[20]
  i1628.textureWidth = i1629[21]
  i1628.textureHeight = i1629[22]
  i1628.nativeSize = new pc.Vec2( i1629[23], i1629[24] )
  i1628.pivot = new pc.Vec2( i1629[25], i1629[26] )
  i1628.textureRectOffset = new pc.Vec2( i1629[27], i1629[28] )
  return i1628
}

Deserializers["Hex.Data.GameSettings"] = function (request, data, root) {
  var i1630 = root || request.c( 'Hex.Data.GameSettings' )
  var i1631 = data
  i1630.cellSize = i1631[0]
  i1630.cellGap = i1631[1]
  i1630.stackElementGap = i1631[2]
  i1630.pickupDuration = i1631[3]
  i1630.pickupHeight = i1631[4]
  i1630.dropDuration = i1631[5]
  i1630.dragLerpSpeed = i1631[6]
  i1630.returnSpeed = i1631[7]
  i1630.highlightFadeDuration = i1631[8]
  i1630.hexFlightDuration = i1631[9]
  i1630.hexFlightArcHeight = i1631[10]
  i1630.flightStartDelay = i1631[11]
  i1630.disappearDuration = i1631[12]
  i1630.disappearStartDelay = i1631[13]
  i1630.tutorialIdleTime = i1631[14]
  i1630.tutorialRestartDelay = i1631[15]
  i1630.tutorialGrabDelay = i1631[16]
  i1630.tutorialMoveDelay = i1631[17]
  i1630.stacksToWin = i1631[18]
  i1630.packshotDelay = i1631[19]
  i1630.packshotFadeDuration = i1631[20]
  return i1630
}

Deserializers["Hex.Data.LevelData"] = function (request, data, root) {
  var i1632 = root || request.c( 'Hex.Data.LevelData' )
  var i1633 = data
  i1632.gridWidth = i1633[0]
  i1632.gridHeight = i1633[1]
  var i1635 = i1633[2]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Utils.HexCoordinates')))
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.add(request.d('Hex.Utils.HexCoordinates', i1635[i + 0]));
  }
  i1632.disabledCells = i1634
  var i1637 = i1633[3]
  var i1636 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.StackData')))
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.add(request.d('Hex.Data.StackData', i1637[i + 0]));
  }
  i1632.initialStacks = i1636
  var i1639 = i1633[4]
  var i1638 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.StackData')))
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.add(request.d('Hex.Data.StackData', i1639[i + 0]));
  }
  i1632.playerStacks = i1638
  i1632.tutorialTargetStackIndex = i1633[5]
  i1632.tutorialTargetCell = request.d('Hex.Utils.HexCoordinates', i1633[6], i1632.tutorialTargetCell)
  return i1632
}

Deserializers["Hex.Utils.HexCoordinates"] = function (request, data, root) {
  var i1642 = root || request.c( 'Hex.Utils.HexCoordinates' )
  var i1643 = data
  i1642.q = i1643[0]
  i1642.r = i1643[1]
  return i1642
}

Deserializers["Hex.Data.StackData"] = function (request, data, root) {
  var i1646 = root || request.c( 'Hex.Data.StackData' )
  var i1647 = data
  i1646.gridPosition = request.d('Hex.Utils.HexCoordinates', i1647[0], i1646.gridPosition)
  var i1649 = i1647[1]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.HexColor')))
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.add(i1649[i + 0]);
  }
  i1646.colorsFromBottomToTop = i1648
  return i1646
}

Deserializers["Hex.Data.ColorMaterialMapping"] = function (request, data, root) {
  var i1652 = root || request.c( 'Hex.Data.ColorMaterialMapping' )
  var i1653 = data
  var i1655 = i1653[0]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.ColorMaterialMapping+ColorMaterialPair')))
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.add(request.d('Hex.Data.ColorMaterialMapping+ColorMaterialPair', i1655[i + 0]));
  }
  i1652.mappings = i1654
  return i1652
}

Deserializers["Hex.Data.ColorMaterialMapping+ColorMaterialPair"] = function (request, data, root) {
  var i1658 = root || request.c( 'Hex.Data.ColorMaterialMapping+ColorMaterialPair' )
  var i1659 = data
  i1658.hexColor = i1659[0]
  request.r(i1659[1], i1659[2], 0, i1658, 'material')
  i1658.particleColor = new pc.Color(i1659[3], i1659[4], i1659[5], i1659[6])
  return i1658
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1660 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1661 = data
  i1660.useSafeMode = !!i1661[0]
  i1660.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1661[1], i1660.safeModeOptions)
  i1660.timeScale = i1661[2]
  i1660.unscaledTimeScale = i1661[3]
  i1660.useSmoothDeltaTime = !!i1661[4]
  i1660.maxSmoothUnscaledTime = i1661[5]
  i1660.rewindCallbackMode = i1661[6]
  i1660.showUnityEditorReport = !!i1661[7]
  i1660.logBehaviour = i1661[8]
  i1660.drawGizmos = !!i1661[9]
  i1660.defaultRecyclable = !!i1661[10]
  i1660.defaultAutoPlay = i1661[11]
  i1660.defaultUpdateType = i1661[12]
  i1660.defaultTimeScaleIndependent = !!i1661[13]
  i1660.defaultEaseType = i1661[14]
  i1660.defaultEaseOvershootOrAmplitude = i1661[15]
  i1660.defaultEasePeriod = i1661[16]
  i1660.defaultAutoKill = !!i1661[17]
  i1660.defaultLoopType = i1661[18]
  i1660.debugMode = !!i1661[19]
  i1660.debugStoreTargetId = !!i1661[20]
  i1660.showPreviewPanel = !!i1661[21]
  i1660.storeSettingsLocation = i1661[22]
  i1660.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1661[23], i1660.modules)
  i1660.createASMDEF = !!i1661[24]
  i1660.showPlayingTweens = !!i1661[25]
  i1660.showPausedTweens = !!i1661[26]
  return i1660
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1662 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1663 = data
  i1662.logBehaviour = i1663[0]
  i1662.nestedTweenFailureBehaviour = i1663[1]
  return i1662
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1664 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1665 = data
  i1664.showPanel = !!i1665[0]
  i1664.audioEnabled = !!i1665[1]
  i1664.physicsEnabled = !!i1665[2]
  i1664.physics2DEnabled = !!i1665[3]
  i1664.spriteEnabled = !!i1665[4]
  i1664.uiEnabled = !!i1665[5]
  i1664.textMeshProEnabled = !!i1665[6]
  i1664.tk2DEnabled = !!i1665[7]
  i1664.deAudioEnabled = !!i1665[8]
  i1664.deUnityExtendedEnabled = !!i1665[9]
  i1664.epoOutlineEnabled = !!i1665[10]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1667 = data
  var i1669 = i1667[0]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1669[i + 0]) );
  }
  i1666.files = i1668
  i1666.componentToPrefabIds = i1667[1]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1673 = data
  i1672.path = i1673[0]
  request.r(i1673[1], i1673[2], 0, i1672, 'unityObject')
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1675 = data
  var i1677 = i1675[0]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1677[i + 0]) );
  }
  i1674.scriptsExecutionOrder = i1676
  var i1679 = i1675[1]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1679[i + 0]) );
  }
  i1674.sortingLayers = i1678
  var i1681 = i1675[2]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1681[i + 0]) );
  }
  i1674.cullingLayers = i1680
  i1674.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1675[3], i1674.timeSettings)
  i1674.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1675[4], i1674.physicsSettings)
  i1674.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1675[5], i1674.physics2DSettings)
  i1674.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1675[6], i1674.qualitySettings)
  i1674.enableRealtimeShadows = !!i1675[7]
  i1674.enableAutoInstancing = !!i1675[8]
  i1674.enableStaticBatching = !!i1675[9]
  i1674.enableDynamicBatching = !!i1675[10]
  i1674.lightmapEncodingQuality = i1675[11]
  i1674.desiredColorSpace = i1675[12]
  var i1683 = i1675[13]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( i1683[i + 0] );
  }
  i1674.allTags = i1682
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1687 = data
  i1686.name = i1687[0]
  i1686.value = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1691 = data
  i1690.id = i1691[0]
  i1690.name = i1691[1]
  i1690.value = i1691[2]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1695 = data
  i1694.id = i1695[0]
  i1694.name = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1697 = data
  i1696.fixedDeltaTime = i1697[0]
  i1696.maximumDeltaTime = i1697[1]
  i1696.timeScale = i1697[2]
  i1696.maximumParticleTimestep = i1697[3]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1699 = data
  i1698.gravity = new pc.Vec3( i1699[0], i1699[1], i1699[2] )
  i1698.defaultSolverIterations = i1699[3]
  i1698.bounceThreshold = i1699[4]
  i1698.autoSyncTransforms = !!i1699[5]
  i1698.autoSimulation = !!i1699[6]
  var i1701 = i1699[7]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1701[i + 0]) );
  }
  i1698.collisionMatrix = i1700
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.layerId = i1705[1]
  i1704.otherLayerId = i1705[2]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'material')
  i1706.gravity = new pc.Vec2( i1707[2], i1707[3] )
  i1706.positionIterations = i1707[4]
  i1706.velocityIterations = i1707[5]
  i1706.velocityThreshold = i1707[6]
  i1706.maxLinearCorrection = i1707[7]
  i1706.maxAngularCorrection = i1707[8]
  i1706.maxTranslationSpeed = i1707[9]
  i1706.maxRotationSpeed = i1707[10]
  i1706.baumgarteScale = i1707[11]
  i1706.baumgarteTOIScale = i1707[12]
  i1706.timeToSleep = i1707[13]
  i1706.linearSleepTolerance = i1707[14]
  i1706.angularSleepTolerance = i1707[15]
  i1706.defaultContactOffset = i1707[16]
  i1706.autoSimulation = !!i1707[17]
  i1706.queriesHitTriggers = !!i1707[18]
  i1706.queriesStartInColliders = !!i1707[19]
  i1706.callbacksOnDisable = !!i1707[20]
  i1706.reuseCollisionCallbacks = !!i1707[21]
  i1706.autoSyncTransforms = !!i1707[22]
  var i1709 = i1707[23]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1709[i + 0]) );
  }
  i1706.collisionMatrix = i1708
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1713 = data
  i1712.enabled = !!i1713[0]
  i1712.layerId = i1713[1]
  i1712.otherLayerId = i1713[2]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1715 = data
  var i1717 = i1715[0]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1717[i + 0]) );
  }
  i1714.qualityLevels = i1716
  var i1719 = i1715[1]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( i1719[i + 0] );
  }
  i1714.names = i1718
  i1714.shadows = i1715[2]
  i1714.anisotropicFiltering = i1715[3]
  i1714.antiAliasing = i1715[4]
  i1714.lodBias = i1715[5]
  i1714.shadowCascades = i1715[6]
  i1714.shadowDistance = i1715[7]
  i1714.shadowmaskMode = i1715[8]
  i1714.shadowProjection = i1715[9]
  i1714.shadowResolution = i1715[10]
  i1714.softParticles = !!i1715[11]
  i1714.softVegetation = !!i1715[12]
  i1714.activeColorSpace = i1715[13]
  i1714.desiredColorSpace = i1715[14]
  i1714.masterTextureLimit = i1715[15]
  i1714.maxQueuedFrames = i1715[16]
  i1714.particleRaycastBudget = i1715[17]
  i1714.pixelLightCount = i1715[18]
  i1714.realtimeReflectionProbes = !!i1715[19]
  i1714.shadowCascade2Split = i1715[20]
  i1714.shadowCascade4Split = new pc.Vec3( i1715[21], i1715[22], i1715[23] )
  i1714.streamingMipmapsActive = !!i1715[24]
  i1714.vSyncCount = i1715[25]
  i1714.asyncUploadBufferSize = i1715[26]
  i1714.asyncUploadTimeSlice = i1715[27]
  i1714.billboardsFaceCameraPosition = !!i1715[28]
  i1714.shadowNearPlaneOffset = i1715[29]
  i1714.streamingMipmapsMemoryBudget = i1715[30]
  i1714.maximumLODLevel = i1715[31]
  i1714.streamingMipmapsAddAllCameras = !!i1715[32]
  i1714.streamingMipmapsMaxLevelReduction = i1715[33]
  i1714.streamingMipmapsRenderersPerFrame = i1715[34]
  i1714.resolutionScalingFixedDPIFactor = i1715[35]
  i1714.streamingMipmapsMaxFileIORequests = i1715[36]
  i1714.currentQualityLevel = i1715[37]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1725 = data
  i1724.weight = i1725[0]
  i1724.vertices = i1725[1]
  i1724.normals = i1725[2]
  i1724.tangents = i1725[3]
  return i1724
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'm_ObjectArgument')
  i1726.m_ObjectArgumentAssemblyTypeName = i1727[2]
  i1726.m_IntArgument = i1727[3]
  i1726.m_FloatArgument = i1727[4]
  i1726.m_StringArgument = i1727[5]
  i1726.m_BoolArgument = !!i1727[6]
  return i1726
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"enabled":21},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"lightmapEncodingQuality":11,"desiredColorSpace":12,"allTags":13},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[58],"59":[15],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[69],"77":[69],"78":[69],"79":[69],"80":[69],"81":[69],"82":[15],"83":[3],"84":[85],"86":[85],"31":[30],"87":[43],"17":[15],"13":[11],"88":[89],"90":[46],"91":[89],"92":[30],"93":[30],"34":[31],"37":[36,30],"43":[30],"33":[31],"94":[30],"95":[30],"96":[30],"97":[30],"98":[30],"99":[30],"100":[30],"101":[30],"102":[30],"103":[36,30],"104":[30],"105":[30],"106":[30],"107":[30],"108":[36,30],"109":[30],"110":[44],"111":[44],"45":[44],"112":[44],"113":[15],"114":[15],"115":[93],"42":[93],"116":[30,36],"117":[30],"38":[30],"35":[31],"118":[119],"120":[15],"121":[89]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Hex.Components.HexCell","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.Shader","Hex.Components.HexStack","Hex.Components.HexElement","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Hex.Components.DisappearParticle","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","Hex.Core.OrthographicCameraFitter","UnityEngine.Light","Hex.Core.GameFlowController","Hex.Data.GameSettings","Hex.Data.LevelData","Hex.Data.ColorMaterialMapping","UnityEngine.GameObject","Hex.Components.TutorialHand","Hex.UI.PackshotScreen","Hex.Core.GridManager","Hex.Core.DragDropController","Hex.Core.ReactionSystem","Hex.Core.StackDisappearController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Coffee.UISoftMask.CanvasViewChangeTrigger","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Coffee.UISoftMask.SoftMask","Hex.UI.TutorialOverlay","UnityEngine.CanvasGroup","UnityEngine.Sprite","Coffee.UISoftMask.MaskingShape","UnityEngine.UI.AspectRatioFitter","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.UI.Button","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UI.AdaptiveAspectFitter","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Coffee.UISoftMask.AlphaHitTestTarget","Coffee.UISoftMask.TerminalMaskingShape","Coffee.UISoftMask.RectTransformFitter","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Hex";

Deserializers.lunaInitializationTime = "02/17/2026 14:27:14";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.1.0";

Deserializers.lunaSHA = "cf93782349542fe0b84ad13951a26809f8419628";

Deserializers.creativeName = "HexTest";

Deserializers.lunaAppID = "35786";

Deserializers.projectId = "84c93e296f9fd6849b53a724b8361683";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1663";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3737";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Hex";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "601c99d3-c93f-4091-8fe5-85478e1132d3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UISoftMaskInternal","UIExtraCallbacks","InitializeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Coffee","UISoftMaskInternal","RenderTextureRepository","Clear"],["Coffee","UISoftMaskInternal","MaterialRepository","Clear"],["Coffee","UISoftMaskInternal","FrameCache","Clear"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

