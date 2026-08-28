var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.JointSpring' )
  var i423 = data
  i422.spring = i423[0]
  i422.damper = i423[1]
  i422.targetPosition = i423[2]
  return i422
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.JointMotor' )
  var i425 = data
  i424.m_TargetVelocity = i425[0]
  i424.m_Force = i425[1]
  i424.m_FreeSpin = i425[2]
  return i424
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointLimits' )
  var i427 = data
  i426.m_Min = i427[0]
  i426.m_Max = i427[1]
  i426.m_Bounciness = i427[2]
  i426.m_BounceMinVelocity = i427[3]
  i426.m_ContactDistance = i427[4]
  i426.minBounce = i427[5]
  i426.maxBounce = i427[6]
  return i426
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointDrive' )
  var i429 = data
  i428.m_PositionSpring = i429[0]
  i428.m_PositionDamper = i429[1]
  i428.m_MaximumForce = i429[2]
  i428.m_UseAcceleration = i429[3]
  return i428
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i431 = data
  i430.m_Spring = i431[0]
  i430.m_Damper = i431[1]
  return i430
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i433 = data
  i432.m_Limit = i433[0]
  i432.m_Bounciness = i433[1]
  i432.m_ContactDistance = i433[2]
  return i432
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i435 = data
  i434.m_ExtremumSlip = i435[0]
  i434.m_ExtremumValue = i435[1]
  i434.m_AsymptoteSlip = i435[2]
  i434.m_AsymptoteValue = i435[3]
  i434.m_Stiffness = i435[4]
  return i434
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i437 = data
  i436.m_LowerAngle = i437[0]
  i436.m_UpperAngle = i437[1]
  return i436
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i439 = data
  i438.m_MotorSpeed = i439[0]
  i438.m_MaximumMotorTorque = i439[1]
  return i438
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i441 = data
  i440.m_DampingRatio = i441[0]
  i440.m_Frequency = i441[1]
  i440.m_Angle = i441[2]
  return i440
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i443 = data
  i442.m_LowerTranslation = i443[0]
  i442.m_UpperTranslation = i443[1]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i445 = data
  i444.position = new pc.Vec3( i445[0], i445[1], i445[2] )
  i444.scale = new pc.Vec3( i445[3], i445[4], i445[5] )
  i444.rotation = new pc.Quat(i445[6], i445[7], i445[8], i445[9])
  return i444
}

Deserializers["Hex.Components.HexCell"] = function (request, data, root) {
  var i446 = root || request.c( 'Hex.Components.HexCell' )
  var i447 = data
  request.r(i447[0], i447[1], 0, i446, 'highlightRenderer')
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'sharedMesh')
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'additionalVertexStreams')
  i450.enabled = !!i451[2]
  request.r(i451[3], i451[4], 0, i450, 'sharedMaterial')
  var i453 = i451[5]
  var i452 = []
  for(var i = 0; i < i453.length; i += 2) {
  request.r(i453[i + 0], i453[i + 1], 2, i452, '')
  }
  i450.sharedMaterials = i452
  i450.receiveShadows = !!i451[6]
  i450.shadowCastingMode = i451[7]
  i450.sortingLayerID = i451[8]
  i450.sortingOrder = i451[9]
  i450.lightmapIndex = i451[10]
  i450.lightmapSceneIndex = i451[11]
  i450.lightmapScaleOffset = new pc.Vec4( i451[12], i451[13], i451[14], i451[15] )
  i450.lightProbeUsage = i451[16]
  i450.reflectionProbeUsage = i451[17]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'sharedMesh')
  i456.convex = !!i457[2]
  i456.enabled = !!i457[3]
  i456.isTrigger = !!i457[4]
  request.r(i457[5], i457[6], 0, i456, 'material')
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i459 = data
  i458.name = i459[0]
  i458.tagId = i459[1]
  i458.enabled = !!i459[2]
  i458.isStatic = !!i459[3]
  i458.layer = i459[4]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i461 = data
  i460.name = i461[0]
  i460.halfPrecision = !!i461[1]
  i460.useSimplification = !!i461[2]
  i460.useUInt32IndexFormat = !!i461[3]
  i460.vertexCount = i461[4]
  i460.aabb = i461[5]
  var i463 = i461[6]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( !!i463[i + 0] );
  }
  i460.streams = i462
  i460.vertices = i461[7]
  var i465 = i461[8]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i465[i + 0]) );
  }
  i460.subMeshes = i464
  var i467 = i461[9]
  var i466 = []
  for(var i = 0; i < i467.length; i += 16) {
    i466.push( new pc.Mat4().setData(i467[i + 0], i467[i + 1], i467[i + 2], i467[i + 3],  i467[i + 4], i467[i + 5], i467[i + 6], i467[i + 7],  i467[i + 8], i467[i + 9], i467[i + 10], i467[i + 11],  i467[i + 12], i467[i + 13], i467[i + 14], i467[i + 15]) );
  }
  i460.bindposes = i466
  var i469 = i461[10]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i469[i + 0]) );
  }
  i460.blendShapes = i468
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i475 = data
  i474.triangles = i475[0]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i481 = data
  i480.name = i481[0]
  var i483 = i481[1]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i483[i + 0]) );
  }
  i480.frames = i482
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i484 = root || new pc.UnityMaterial()
  var i485 = data
  i484.name = i485[0]
  request.r(i485[1], i485[2], 0, i484, 'shader')
  i484.renderQueue = i485[3]
  i484.enableInstancing = !!i485[4]
  var i487 = i485[5]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i487[i + 0]) );
  }
  i484.floatParameters = i486
  var i489 = i485[6]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i489[i + 0]) );
  }
  i484.colorParameters = i488
  var i491 = i485[7]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i491[i + 0]) );
  }
  i484.vectorParameters = i490
  var i493 = i485[8]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i493[i + 0]) );
  }
  i484.textureParameters = i492
  var i495 = i485[9]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i495[i + 0]) );
  }
  i484.materialFlags = i494
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i499 = data
  i498.name = i499[0]
  i498.value = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i503 = data
  i502.name = i503[0]
  i502.value = new pc.Color(i503[1], i503[2], i503[3], i503[4])
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i507 = data
  i506.name = i507[0]
  i506.value = new pc.Vec4( i507[1], i507[2], i507[3], i507[4] )
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i511 = data
  i510.name = i511[0]
  request.r(i511[1], i511[2], 0, i510, 'value')
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i515 = data
  i514.name = i515[0]
  i514.enabled = !!i515[1]
  return i514
}

Deserializers["Hex.Components.HexStack"] = function (request, data, root) {
  var i516 = root || request.c( 'Hex.Components.HexStack' )
  var i517 = data
  return i516
}

Deserializers["Hex.Components.HexElement"] = function (request, data, root) {
  var i518 = root || request.c( 'Hex.Components.HexElement' )
  var i519 = data
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i521 = data
  i520.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i521[0], i520.main)
  i520.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i521[1], i520.colorBySpeed)
  i520.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i521[2], i520.colorOverLifetime)
  i520.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i521[3], i520.emission)
  i520.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i521[4], i520.rotationBySpeed)
  i520.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i521[5], i520.rotationOverLifetime)
  i520.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i521[6], i520.shape)
  i520.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i521[7], i520.sizeBySpeed)
  i520.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i521[8], i520.sizeOverLifetime)
  i520.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i521[9], i520.textureSheetAnimation)
  i520.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i521[10], i520.velocityOverLifetime)
  i520.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i521[11], i520.noise)
  i520.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i521[12], i520.inheritVelocity)
  i520.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i521[13], i520.forceOverLifetime)
  i520.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i521[14], i520.limitVelocityOverLifetime)
  i520.useAutoRandomSeed = !!i521[15]
  i520.randomSeed = i521[16]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i522 = root || new pc.ParticleSystemMain()
  var i523 = data
  i522.duration = i523[0]
  i522.loop = !!i523[1]
  i522.prewarm = !!i523[2]
  i522.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[3], i522.startDelay)
  i522.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[4], i522.startLifetime)
  i522.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[5], i522.startSpeed)
  i522.startSize3D = !!i523[6]
  i522.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[7], i522.startSizeX)
  i522.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[8], i522.startSizeY)
  i522.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[9], i522.startSizeZ)
  i522.startRotation3D = !!i523[10]
  i522.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[11], i522.startRotationX)
  i522.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[12], i522.startRotationY)
  i522.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[13], i522.startRotationZ)
  i522.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i523[14], i522.startColor)
  i522.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i523[15], i522.gravityModifier)
  i522.simulationSpace = i523[16]
  request.r(i523[17], i523[18], 0, i522, 'customSimulationSpace')
  i522.simulationSpeed = i523[19]
  i522.useUnscaledTime = !!i523[20]
  i522.scalingMode = i523[21]
  i522.playOnAwake = !!i523[22]
  i522.maxParticles = i523[23]
  i522.emitterVelocityMode = i523[24]
  i522.stopAction = i523[25]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i524 = root || new pc.MinMaxCurve()
  var i525 = data
  i524.mode = i525[0]
  i524.curveMin = new pc.AnimationCurve( { keys_flow: i525[1] } )
  i524.curveMax = new pc.AnimationCurve( { keys_flow: i525[2] } )
  i524.curveMultiplier = i525[3]
  i524.constantMin = i525[4]
  i524.constantMax = i525[5]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i526 = root || new pc.MinMaxGradient()
  var i527 = data
  i526.mode = i527[0]
  i526.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i527[1], i526.gradientMin)
  i526.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i527[2], i526.gradientMax)
  i526.colorMin = new pc.Color(i527[3], i527[4], i527[5], i527[6])
  i526.colorMax = new pc.Color(i527[7], i527[8], i527[9], i527[10])
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i529 = data
  i528.mode = i529[0]
  var i531 = i529[1]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i531[i + 0]) );
  }
  i528.colorKeys = i530
  var i533 = i529[2]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i533[i + 0]) );
  }
  i528.alphaKeys = i532
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemColorBySpeed()
  var i535 = data
  i534.enabled = !!i535[0]
  i534.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i535[1], i534.color)
  i534.range = new pc.Vec2( i535[2], i535[3] )
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i539 = data
  i538.color = new pc.Color(i539[0], i539[1], i539[2], i539[3])
  i538.time = i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i543 = data
  i542.alpha = i543[0]
  i542.time = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemColorOverLifetime()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i545[1], i544.color)
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemEmitter()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[1], i546.rateOverTime)
  i546.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[2], i546.rateOverDistance)
  var i549 = i547[3]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i549[i + 0]) );
  }
  i546.bursts = i548
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemBurst()
  var i553 = data
  i552.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[0], i552.count)
  i552.cycleCount = i553[1]
  i552.minCount = i553[2]
  i552.maxCount = i553[3]
  i552.repeatInterval = i553[4]
  i552.time = i553[5]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemRotationBySpeed()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[1], i554.x)
  i554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.y)
  i554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.z)
  i554.separateAxes = !!i555[4]
  i554.range = new pc.Vec2( i555[5], i555[6] )
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemRotationOverLifetime()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.x)
  i556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.y)
  i556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[3], i556.z)
  i556.separateAxes = !!i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemShape()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.shapeType = i559[1]
  i558.randomDirectionAmount = i559[2]
  i558.sphericalDirectionAmount = i559[3]
  i558.randomPositionAmount = i559[4]
  i558.alignToDirection = !!i559[5]
  i558.radius = i559[6]
  i558.radiusMode = i559[7]
  i558.radiusSpread = i559[8]
  i558.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[9], i558.radiusSpeed)
  i558.radiusThickness = i559[10]
  i558.angle = i559[11]
  i558.length = i559[12]
  i558.boxThickness = new pc.Vec3( i559[13], i559[14], i559[15] )
  i558.meshShapeType = i559[16]
  request.r(i559[17], i559[18], 0, i558, 'mesh')
  request.r(i559[19], i559[20], 0, i558, 'meshRenderer')
  request.r(i559[21], i559[22], 0, i558, 'skinnedMeshRenderer')
  i558.useMeshMaterialIndex = !!i559[23]
  i558.meshMaterialIndex = i559[24]
  i558.useMeshColors = !!i559[25]
  i558.normalOffset = i559[26]
  i558.arc = i559[27]
  i558.arcMode = i559[28]
  i558.arcSpread = i559[29]
  i558.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[30], i558.arcSpeed)
  i558.donutRadius = i559[31]
  i558.position = new pc.Vec3( i559[32], i559[33], i559[34] )
  i558.rotation = new pc.Vec3( i559[35], i559[36], i559[37] )
  i558.scale = new pc.Vec3( i559[38], i559[39], i559[40] )
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemSizeBySpeed()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.x)
  i560.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.y)
  i560.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.z)
  i560.separateAxes = !!i561[4]
  i560.range = new pc.Vec2( i561[5], i561[6] )
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemSizeOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[1], i562.x)
  i562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[2], i562.y)
  i562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[3], i562.z)
  i562.separateAxes = !!i563[4]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.mode = i565[1]
  i564.animation = i565[2]
  i564.numTilesX = i565[3]
  i564.numTilesY = i565[4]
  i564.useRandomRow = !!i565[5]
  i564.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[6], i564.frameOverTime)
  i564.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[7], i564.startFrame)
  i564.cycleCount = i565[8]
  i564.rowIndex = i565[9]
  i564.flipU = i565[10]
  i564.flipV = i565[11]
  i564.spriteCount = i565[12]
  var i567 = i565[13]
  var i566 = []
  for(var i = 0; i < i567.length; i += 2) {
  request.r(i567[i + 0], i567[i + 1], 2, i566, '')
  }
  i564.sprites = i566
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.x)
  i570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.y)
  i570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.z)
  i570.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[4], i570.radial)
  i570.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[5], i570.speedModifier)
  i570.space = i571[6]
  i570.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[7], i570.orbitalX)
  i570.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[8], i570.orbitalY)
  i570.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[9], i570.orbitalZ)
  i570.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[10], i570.orbitalOffsetX)
  i570.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[11], i570.orbitalOffsetY)
  i570.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[12], i570.orbitalOffsetZ)
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemNoise()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.separateAxes = !!i573[1]
  i572.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.strengthX)
  i572.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.strengthY)
  i572.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[4], i572.strengthZ)
  i572.frequency = i573[5]
  i572.damping = !!i573[6]
  i572.octaveCount = i573[7]
  i572.octaveMultiplier = i573[8]
  i572.octaveScale = i573[9]
  i572.quality = i573[10]
  i572.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[11], i572.scrollSpeed)
  i572.scrollSpeedMultiplier = i573[12]
  i572.remapEnabled = !!i573[13]
  i572.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[14], i572.remapX)
  i572.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[15], i572.remapY)
  i572.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[16], i572.remapZ)
  i572.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[17], i572.positionAmount)
  i572.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[18], i572.rotationAmount)
  i572.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[19], i572.sizeAmount)
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemInheritVelocity()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.mode = i575[1]
  i574.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.curve)
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemForceOverLifetime()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[1], i576.x)
  i576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[2], i576.y)
  i576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[3], i576.z)
  i576.space = i577[4]
  i576.randomized = !!i577[5]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.limit)
  i578.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.limitX)
  i578.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.limitY)
  i578.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[4], i578.limitZ)
  i578.dampen = i579[5]
  i578.separateAxes = !!i579[6]
  i578.space = i579[7]
  i578.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[8], i578.drag)
  i578.multiplyDragByParticleSize = !!i579[9]
  i578.multiplyDragByParticleVelocity = !!i579[10]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'mesh')
  i580.meshCount = i581[2]
  i580.activeVertexStreamsCount = i581[3]
  i580.alignment = i581[4]
  i580.renderMode = i581[5]
  i580.sortMode = i581[6]
  i580.lengthScale = i581[7]
  i580.velocityScale = i581[8]
  i580.cameraVelocityScale = i581[9]
  i580.normalDirection = i581[10]
  i580.sortingFudge = i581[11]
  i580.minParticleSize = i581[12]
  i580.maxParticleSize = i581[13]
  i580.pivot = new pc.Vec3( i581[14], i581[15], i581[16] )
  request.r(i581[17], i581[18], 0, i580, 'trailMaterial')
  i580.applyActiveColorSpace = !!i581[19]
  i580.enabled = !!i581[20]
  request.r(i581[21], i581[22], 0, i580, 'sharedMaterial')
  var i583 = i581[23]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.sharedMaterials = i582
  i580.receiveShadows = !!i581[24]
  i580.shadowCastingMode = i581[25]
  i580.sortingLayerID = i581[26]
  i580.sortingOrder = i581[27]
  i580.lightmapIndex = i581[28]
  i580.lightmapSceneIndex = i581[29]
  i580.lightmapScaleOffset = new pc.Vec4( i581[30], i581[31], i581[32], i581[33] )
  i580.lightProbeUsage = i581[34]
  i580.reflectionProbeUsage = i581[35]
  return i580
}

Deserializers["Hex.Components.DisappearParticle"] = function (request, data, root) {
  var i584 = root || request.c( 'Hex.Components.DisappearParticle' )
  var i585 = data
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i587 = data
  i586.name = i587[0]
  i586.width = i587[1]
  i586.height = i587[2]
  i586.mipmapCount = i587[3]
  i586.anisoLevel = i587[4]
  i586.filterMode = i587[5]
  i586.hdr = !!i587[6]
  i586.format = i587[7]
  i586.wrapMode = i587[8]
  i586.alphaIsTransparency = !!i587[9]
  i586.alphaSource = i587[10]
  i586.graphicsFormat = i587[11]
  i586.sRGBTexture = !!i587[12]
  i586.desiredColorSpace = i587[13]
  i586.wrapU = i587[14]
  i586.wrapV = i587[15]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i589 = data
  i588.name = i589[0]
  i588.atlasId = i589[1]
  i588.mipmapCount = i589[2]
  i588.hdr = !!i589[3]
  i588.size = i589[4]
  i588.anisoLevel = i589[5]
  i588.filterMode = i589[6]
  var i591 = i589[7]
  var i590 = []
  for(var i = 0; i < i591.length; i += 4) {
    i590.push( UnityEngine.Rect.MinMaxRect(i591[i + 0], i591[i + 1], i591[i + 2], i591[i + 3]) );
  }
  i588.rects = i590
  i588.wrapU = i589[8]
  i588.wrapV = i589[9]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i595 = data
  i594.name = i595[0]
  i594.index = i595[1]
  i594.startup = !!i595[2]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i597 = data
  i596.aspect = i597[0]
  i596.orthographic = !!i597[1]
  i596.orthographicSize = i597[2]
  i596.backgroundColor = new pc.Color(i597[3], i597[4], i597[5], i597[6])
  i596.nearClipPlane = i597[7]
  i596.farClipPlane = i597[8]
  i596.fieldOfView = i597[9]
  i596.depth = i597[10]
  i596.clearFlags = i597[11]
  i596.cullingMask = i597[12]
  i596.rect = i597[13]
  request.r(i597[14], i597[15], 0, i596, 'targetTexture')
  i596.usePhysicalProperties = !!i597[16]
  i596.focalLength = i597[17]
  i596.sensorSize = new pc.Vec2( i597[18], i597[19] )
  i596.lensShift = new pc.Vec2( i597[20], i597[21] )
  i596.gateFit = i597[22]
  i596.commandBufferCount = i597[23]
  i596.cameraType = i597[24]
  i596.enabled = !!i597[25]
  return i596
}

Deserializers["Hex.Core.OrthographicCameraFitter"] = function (request, data, root) {
  var i598 = root || request.c( 'Hex.Core.OrthographicCameraFitter' )
  var i599 = data
  i598.requiredWidth = i599[0]
  i598.requiredHeight = i599[1]
  i598.showOverlay = !!i599[2]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i601 = data
  i600.type = i601[0]
  i600.color = new pc.Color(i601[1], i601[2], i601[3], i601[4])
  i600.cullingMask = i601[5]
  i600.intensity = i601[6]
  i600.range = i601[7]
  i600.spotAngle = i601[8]
  i600.shadows = i601[9]
  i600.shadowNormalBias = i601[10]
  i600.shadowBias = i601[11]
  i600.shadowStrength = i601[12]
  i600.shadowResolution = i601[13]
  i600.lightmapBakeType = i601[14]
  i600.renderMode = i601[15]
  request.r(i601[16], i601[17], 0, i600, 'cookie')
  i600.cookieSize = i601[18]
  i600.shadowNearPlane = i601[19]
  i600.occlusionMaskChannel = i601[20]
  i600.isBaked = !!i601[21]
  i600.mixedLightingMode = i601[22]
  i600.enabled = !!i601[23]
  return i600
}

Deserializers["Hex.Core.GameFlowController"] = function (request, data, root) {
  var i602 = root || request.c( 'Hex.Core.GameFlowController' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'gameSettings')
  request.r(i603[2], i603[3], 0, i602, 'levelData')
  request.r(i603[4], i603[5], 0, i602, 'cellPrefab')
  request.r(i603[6], i603[7], 0, i602, 'stackPrefab')
  request.r(i603[8], i603[9], 0, i602, 'elementPrefab')
  var i605 = i603[10]
  var i604 = []
  for(var i = 0; i < i605.length; i += 2) {
  request.r(i605[i + 0], i605[i + 1], 2, i604, '')
  }
  i602.hexMaterials = i604
  var i607 = i603[11]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i602.playerStackTransforms = i606
  request.r(i603[12], i603[13], 0, i602, 'colorMapping')
  request.r(i603[14], i603[15], 0, i602, 'disappearParticlePrefab')
  request.r(i603[16], i603[17], 0, i602, 'tutorialHand')
  request.r(i603[18], i603[19], 0, i602, 'packshotScreen')
  return i602
}

Deserializers["Hex.Core.GridManager"] = function (request, data, root) {
  var i610 = root || request.c( 'Hex.Core.GridManager' )
  var i611 = data
  return i610
}

Deserializers["Hex.Core.DragDropController"] = function (request, data, root) {
  var i612 = root || request.c( 'Hex.Core.DragDropController' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'shadowPrefab')
  return i612
}

Deserializers["Hex.Core.ReactionSystem"] = function (request, data, root) {
  var i614 = root || request.c( 'Hex.Core.ReactionSystem' )
  var i615 = data
  return i614
}

Deserializers["Hex.Core.StackDisappearController"] = function (request, data, root) {
  var i616 = root || request.c( 'Hex.Core.StackDisappearController' )
  var i617 = data
  return i616
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_FirstSelected')
  i618.m_sendNavigationEvents = !!i619[2]
  i618.m_DragThreshold = i619[3]
  return i618
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i621 = data
  i620.m_HorizontalAxis = i621[0]
  i620.m_VerticalAxis = i621[1]
  i620.m_SubmitButton = i621[2]
  i620.m_CancelButton = i621[3]
  i620.m_InputActionsPerSecond = i621[4]
  i620.m_RepeatDelay = i621[5]
  i620.m_ForceModuleActive = !!i621[6]
  i620.m_SendPointerHoverToParent = !!i621[7]
  return i620
}

Deserializers["Hex.Components.TutorialHand"] = function (request, data, root) {
  var i622 = root || request.c( 'Hex.Components.TutorialHand' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'handRenderer')
  request.r(i623[2], i623[3], 0, i622, 'pointStack')
  request.r(i623[4], i623[5], 0, i622, 'pointTarget')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i625 = data
  i624.color = new pc.Color(i625[0], i625[1], i625[2], i625[3])
  request.r(i625[4], i625[5], 0, i624, 'sprite')
  i624.flipX = !!i625[6]
  i624.flipY = !!i625[7]
  i624.drawMode = i625[8]
  i624.size = new pc.Vec2( i625[9], i625[10] )
  i624.tileMode = i625[11]
  i624.adaptiveModeThreshold = i625[12]
  i624.maskInteraction = i625[13]
  i624.spriteSortPoint = i625[14]
  i624.enabled = !!i625[15]
  request.r(i625[16], i625[17], 0, i624, 'sharedMaterial')
  var i627 = i625[18]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.sharedMaterials = i626
  i624.receiveShadows = !!i625[19]
  i624.shadowCastingMode = i625[20]
  i624.sortingLayerID = i625[21]
  i624.sortingOrder = i625[22]
  i624.lightmapIndex = i625[23]
  i624.lightmapSceneIndex = i625[24]
  i624.lightmapScaleOffset = new pc.Vec4( i625[25], i625[26], i625[27], i625[28] )
  i624.lightProbeUsage = i625[29]
  i624.reflectionProbeUsage = i625[30]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i629 = data
  i628.pivot = new pc.Vec2( i629[0], i629[1] )
  i628.anchorMin = new pc.Vec2( i629[2], i629[3] )
  i628.anchorMax = new pc.Vec2( i629[4], i629[5] )
  i628.sizeDelta = new pc.Vec2( i629[6], i629[7] )
  i628.anchoredPosition3D = new pc.Vec3( i629[8], i629[9], i629[10] )
  i628.rotation = new pc.Quat(i629[11], i629[12], i629[13], i629[14])
  i628.scale = new pc.Vec3( i629[15], i629[16], i629[17] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i631 = data
  i630.planeDistance = i631[0]
  i630.referencePixelsPerUnit = i631[1]
  i630.isFallbackOverlay = !!i631[2]
  i630.renderMode = i631[3]
  i630.renderOrder = i631[4]
  i630.sortingLayerName = i631[5]
  i630.sortingOrder = i631[6]
  i630.scaleFactor = i631[7]
  request.r(i631[8], i631[9], 0, i630, 'worldCamera')
  i630.overrideSorting = !!i631[10]
  i630.pixelPerfect = !!i631[11]
  i630.targetDisplay = i631[12]
  i630.overridePixelPerfect = !!i631[13]
  i630.enabled = !!i631[14]
  return i630
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i633 = data
  i632.m_UiScaleMode = i633[0]
  i632.m_ReferencePixelsPerUnit = i633[1]
  i632.m_ScaleFactor = i633[2]
  i632.m_ReferenceResolution = new pc.Vec2( i633[3], i633[4] )
  i632.m_ScreenMatchMode = i633[5]
  i632.m_MatchWidthOrHeight = i633[6]
  i632.m_PhysicalUnit = i633[7]
  i632.m_FallbackScreenDPI = i633[8]
  i632.m_DefaultSpriteDPI = i633[9]
  i632.m_DynamicPixelsPerUnit = i633[10]
  i632.m_PresetInfoIsWorld = !!i633[11]
  return i632
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i635 = data
  i634.m_IgnoreReversedGraphics = !!i635[0]
  i634.m_BlockingObjects = i635[1]
  i634.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i635[2] )
  return i634
}

Deserializers["Hex.UI.PackshotScreen"] = function (request, data, root) {
  var i636 = root || request.c( 'Hex.UI.PackshotScreen' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'canvasGroup')
  request.r(i637[2], i637[3], 0, i636, 'clickArea')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i639 = data
  i638.m_Alpha = i639[0]
  i638.m_Interactable = !!i639[1]
  i638.m_BlocksRaycasts = !!i639[2]
  i638.m_IgnoreParentGroups = !!i639[3]
  i638.enabled = !!i639[4]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i641 = data
  i640.cullTransparentMesh = !!i641[0]
  return i640
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.Image' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'm_Sprite')
  i642.m_Type = i643[2]
  i642.m_PreserveAspect = !!i643[3]
  i642.m_FillCenter = !!i643[4]
  i642.m_FillMethod = i643[5]
  i642.m_FillAmount = i643[6]
  i642.m_FillClockwise = !!i643[7]
  i642.m_FillOrigin = i643[8]
  i642.m_UseSpriteMesh = !!i643[9]
  i642.m_PixelsPerUnitMultiplier = i643[10]
  request.r(i643[11], i643[12], 0, i642, 'm_Material')
  i642.m_Maskable = !!i643[13]
  i642.m_Color = new pc.Color(i643[14], i643[15], i643[16], i643[17])
  i642.m_RaycastTarget = !!i643[18]
  i642.m_RaycastPadding = new pc.Vec4( i643[19], i643[20], i643[21], i643[22] )
  return i642
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i645 = data
  i644.m_AspectMode = i645[0]
  i644.m_AspectRatio = i645[1]
  return i644
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.Button' )
  var i647 = data
  i646.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i647[0], i646.m_OnClick)
  i646.m_Navigation = request.d('UnityEngine.UI.Navigation', i647[1], i646.m_Navigation)
  i646.m_Transition = i647[2]
  i646.m_Colors = request.d('UnityEngine.UI.ColorBlock', i647[3], i646.m_Colors)
  i646.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i647[4], i646.m_SpriteState)
  i646.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i647[5], i646.m_AnimationTriggers)
  i646.m_Interactable = !!i647[6]
  request.r(i647[7], i647[8], 0, i646, 'm_TargetGraphic')
  return i646
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i649 = data
  i648.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i649[0], i648.m_PersistentCalls)
  return i648
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i651 = data
  var i653 = i651[0]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('UnityEngine.Events.PersistentCall', i653[i + 0]));
  }
  i650.m_Calls = i652
  return i650
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Target')
  i656.m_TargetAssemblyTypeName = i657[2]
  i656.m_MethodName = i657[3]
  i656.m_Mode = i657[4]
  i656.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i657[5], i656.m_Arguments)
  i656.m_CallState = i657[6]
  return i656
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i659 = data
  i658.m_Mode = i659[0]
  i658.m_WrapAround = !!i659[1]
  request.r(i659[2], i659[3], 0, i658, 'm_SelectOnUp')
  request.r(i659[4], i659[5], 0, i658, 'm_SelectOnDown')
  request.r(i659[6], i659[7], 0, i658, 'm_SelectOnLeft')
  request.r(i659[8], i659[9], 0, i658, 'm_SelectOnRight')
  return i658
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i661 = data
  i660.m_NormalColor = new pc.Color(i661[0], i661[1], i661[2], i661[3])
  i660.m_HighlightedColor = new pc.Color(i661[4], i661[5], i661[6], i661[7])
  i660.m_PressedColor = new pc.Color(i661[8], i661[9], i661[10], i661[11])
  i660.m_SelectedColor = new pc.Color(i661[12], i661[13], i661[14], i661[15])
  i660.m_DisabledColor = new pc.Color(i661[16], i661[17], i661[18], i661[19])
  i660.m_ColorMultiplier = i661[20]
  i660.m_FadeDuration = i661[21]
  return i660
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'm_HighlightedSprite')
  request.r(i663[2], i663[3], 0, i662, 'm_PressedSprite')
  request.r(i663[4], i663[5], 0, i662, 'm_SelectedSprite')
  request.r(i663[6], i663[7], 0, i662, 'm_DisabledSprite')
  return i662
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i665 = data
  i664.m_NormalTrigger = i665[0]
  i664.m_HighlightedTrigger = i665[1]
  i664.m_PressedTrigger = i665[2]
  i664.m_SelectedTrigger = i665[3]
  i664.m_DisabledTrigger = i665[4]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i667 = data
  i666.ambientIntensity = i667[0]
  i666.reflectionIntensity = i667[1]
  i666.ambientMode = i667[2]
  i666.ambientLight = new pc.Color(i667[3], i667[4], i667[5], i667[6])
  i666.ambientSkyColor = new pc.Color(i667[7], i667[8], i667[9], i667[10])
  i666.ambientGroundColor = new pc.Color(i667[11], i667[12], i667[13], i667[14])
  i666.ambientEquatorColor = new pc.Color(i667[15], i667[16], i667[17], i667[18])
  i666.fogColor = new pc.Color(i667[19], i667[20], i667[21], i667[22])
  i666.fogEndDistance = i667[23]
  i666.fogStartDistance = i667[24]
  i666.fogDensity = i667[25]
  i666.fog = !!i667[26]
  request.r(i667[27], i667[28], 0, i666, 'skybox')
  i666.fogMode = i667[29]
  var i669 = i667[30]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i669[i + 0]) );
  }
  i666.lightmaps = i668
  i666.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i667[31], i666.lightProbes)
  i666.lightmapsMode = i667[32]
  i666.mixedBakeMode = i667[33]
  i666.environmentLightingMode = i667[34]
  i666.ambientProbe = new pc.SphericalHarmonicsL2(i667[35])
  request.r(i667[36], i667[37], 0, i666, 'customReflection')
  request.r(i667[38], i667[39], 0, i666, 'defaultReflection')
  i666.defaultReflectionMode = i667[40]
  i666.defaultReflectionResolution = i667[41]
  i666.sunLightObjectId = i667[42]
  i666.pixelLightCount = i667[43]
  i666.defaultReflectionHDR = !!i667[44]
  i666.hasLightDataAsset = !!i667[45]
  i666.hasManualGenerate = !!i667[46]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'lightmapColor')
  request.r(i673[2], i673[3], 0, i672, 'lightmapDirection')
  request.r(i673[4], i673[5], 0, i672, 'shadowMask')
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i674 = root || new UnityEngine.LightProbes()
  var i675 = data
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i685[i + 0]));
  }
  i682.ShaderCompilationErrors = i684
  i682.name = i683[1]
  i682.guid = i683[2]
  var i687 = i683[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( i687[i + 0] );
  }
  i682.shaderDefinedKeywords = i686
  var i689 = i683[4]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i689[i + 0]) );
  }
  i682.passes = i688
  var i691 = i683[5]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i691[i + 0]) );
  }
  i682.usePasses = i690
  var i693 = i683[6]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i693[i + 0]) );
  }
  i682.defaultParameterValues = i692
  request.r(i683[7], i683[8], 0, i682, 'unityFallbackShader')
  i682.readDepth = !!i683[9]
  i682.hasDepthOnlyPass = !!i683[10]
  i682.isCreatedByShaderGraph = !!i683[11]
  i682.disableBatching = !!i683[12]
  i682.compiled = !!i683[13]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i697 = data
  i696.shaderName = i697[0]
  i696.errorMessage = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i702 = root || new pc.UnityShaderPass()
  var i703 = data
  i702.id = i703[0]
  i702.subShaderIndex = i703[1]
  i702.name = i703[2]
  i702.passType = i703[3]
  i702.grabPassTextureName = i703[4]
  i702.usePass = !!i703[5]
  i702.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[6], i702.zTest)
  i702.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[7], i702.zWrite)
  i702.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[8], i702.culling)
  i702.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i703[9], i702.blending)
  i702.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i703[10], i702.alphaBlending)
  i702.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[11], i702.colorWriteMask)
  i702.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[12], i702.offsetUnits)
  i702.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[13], i702.offsetFactor)
  i702.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[14], i702.stencilRef)
  i702.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[15], i702.stencilReadMask)
  i702.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i703[16], i702.stencilWriteMask)
  i702.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i703[17], i702.stencilOp)
  i702.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i703[18], i702.stencilOpFront)
  i702.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i703[19], i702.stencilOpBack)
  var i705 = i703[20]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i705[i + 0]) );
  }
  i702.tags = i704
  var i707 = i703[21]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i702.passDefinedKeywords = i706
  var i709 = i703[22]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i709[i + 0]) );
  }
  i702.passDefinedKeywordGroups = i708
  var i711 = i703[23]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i711[i + 0]) );
  }
  i702.variants = i710
  var i713 = i703[24]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i713[i + 0]) );
  }
  i702.excludedVariants = i712
  i702.hasDepthReader = !!i703[25]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i715 = data
  i714.val = i715[0]
  i714.name = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i717 = data
  i716.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[0], i716.src)
  i716.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[1], i716.dst)
  i716.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i717[2], i716.op)
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i719 = data
  i718.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[0], i718.pass)
  i718.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[1], i718.fail)
  i718.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[2], i718.zFail)
  i718.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i719[3], i718.comp)
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i723 = data
  i722.name = i723[0]
  i722.value = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i727 = data
  var i729 = i727[0]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( i729[i + 0] );
  }
  i726.keywords = i728
  i726.hasDiscard = !!i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i733 = data
  i732.passId = i733[0]
  i732.subShaderIndex = i733[1]
  var i735 = i733[2]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i732.keywords = i734
  i732.vertexProgram = i733[3]
  i732.fragmentProgram = i733[4]
  i732.exportedForWebGl2 = !!i733[5]
  i732.readDepth = !!i733[6]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'shader')
  i738.pass = i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i743 = data
  i742.name = i743[0]
  i742.type = i743[1]
  i742.value = new pc.Vec4( i743[2], i743[3], i743[4], i743[5] )
  i742.textureValue = i743[6]
  i742.shaderPropertyFlag = i743[7]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'texture')
  i744.aabb = i745[3]
  i744.vertices = i745[4]
  i744.triangles = i745[5]
  i744.textureRect = UnityEngine.Rect.MinMaxRect(i745[6], i745[7], i745[8], i745[9])
  i744.packedRect = UnityEngine.Rect.MinMaxRect(i745[10], i745[11], i745[12], i745[13])
  i744.border = new pc.Vec4( i745[14], i745[15], i745[16], i745[17] )
  i744.transparency = i745[18]
  i744.bounds = i745[19]
  i744.pixelsPerUnit = i745[20]
  i744.textureWidth = i745[21]
  i744.textureHeight = i745[22]
  i744.nativeSize = new pc.Vec2( i745[23], i745[24] )
  i744.pivot = new pc.Vec2( i745[25], i745[26] )
  i744.textureRectOffset = new pc.Vec2( i745[27], i745[28] )
  return i744
}

Deserializers["Hex.Data.GameSettings"] = function (request, data, root) {
  var i746 = root || request.c( 'Hex.Data.GameSettings' )
  var i747 = data
  i746.cellSize = i747[0]
  i746.cellGap = i747[1]
  i746.stackElementGap = i747[2]
  i746.pickupDuration = i747[3]
  i746.pickupHeight = i747[4]
  i746.dropDuration = i747[5]
  i746.dragLerpSpeed = i747[6]
  i746.returnSpeed = i747[7]
  i746.highlightFadeDuration = i747[8]
  i746.hexFlightDuration = i747[9]
  i746.hexFlightArcHeight = i747[10]
  i746.flightStartDelay = i747[11]
  i746.disappearDuration = i747[12]
  i746.disappearStartDelay = i747[13]
  i746.tutorialIdleTime = i747[14]
  i746.tutorialRestartDelay = i747[15]
  i746.tutorialGrabDelay = i747[16]
  i746.tutorialMoveDelay = i747[17]
  i746.stacksToWin = i747[18]
  i746.packshotDelay = i747[19]
  i746.packshotFadeDuration = i747[20]
  return i746
}

Deserializers["Hex.Data.LevelData"] = function (request, data, root) {
  var i748 = root || request.c( 'Hex.Data.LevelData' )
  var i749 = data
  i748.gridWidth = i749[0]
  i748.gridHeight = i749[1]
  var i751 = i749[2]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Utils.HexCoordinates')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(request.d('Hex.Utils.HexCoordinates', i751[i + 0]));
  }
  i748.disabledCells = i750
  var i753 = i749[3]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.StackData')))
  for(var i = 0; i < i753.length; i += 1) {
    i752.add(request.d('Hex.Data.StackData', i753[i + 0]));
  }
  i748.initialStacks = i752
  var i755 = i749[4]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.StackData')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('Hex.Data.StackData', i755[i + 0]));
  }
  i748.playerStacks = i754
  i748.tutorialTargetStackIndex = i749[5]
  i748.tutorialTargetCell = request.d('Hex.Utils.HexCoordinates', i749[6], i748.tutorialTargetCell)
  return i748
}

Deserializers["Hex.Utils.HexCoordinates"] = function (request, data, root) {
  var i758 = root || request.c( 'Hex.Utils.HexCoordinates' )
  var i759 = data
  i758.q = i759[0]
  i758.r = i759[1]
  return i758
}

Deserializers["Hex.Data.StackData"] = function (request, data, root) {
  var i762 = root || request.c( 'Hex.Data.StackData' )
  var i763 = data
  i762.gridPosition = request.d('Hex.Utils.HexCoordinates', i763[0], i762.gridPosition)
  var i765 = i763[1]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.HexColor')))
  for(var i = 0; i < i765.length; i += 1) {
    i764.add(i765[i + 0]);
  }
  i762.colorsFromBottomToTop = i764
  return i762
}

Deserializers["Hex.Data.ColorMaterialMapping"] = function (request, data, root) {
  var i768 = root || request.c( 'Hex.Data.ColorMaterialMapping' )
  var i769 = data
  var i771 = i769[0]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.ColorMaterialMapping+ColorMaterialPair')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('Hex.Data.ColorMaterialMapping+ColorMaterialPair', i771[i + 0]));
  }
  i768.mappings = i770
  return i768
}

Deserializers["Hex.Data.ColorMaterialMapping+ColorMaterialPair"] = function (request, data, root) {
  var i774 = root || request.c( 'Hex.Data.ColorMaterialMapping+ColorMaterialPair' )
  var i775 = data
  i774.hexColor = i775[0]
  request.r(i775[1], i775[2], 0, i774, 'material')
  i774.particleColor = new pc.Color(i775[3], i775[4], i775[5], i775[6])
  return i774
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i776 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i777 = data
  i776.useSafeMode = !!i777[0]
  i776.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i777[1], i776.safeModeOptions)
  i776.timeScale = i777[2]
  i776.unscaledTimeScale = i777[3]
  i776.useSmoothDeltaTime = !!i777[4]
  i776.maxSmoothUnscaledTime = i777[5]
  i776.rewindCallbackMode = i777[6]
  i776.showUnityEditorReport = !!i777[7]
  i776.logBehaviour = i777[8]
  i776.drawGizmos = !!i777[9]
  i776.defaultRecyclable = !!i777[10]
  i776.defaultAutoPlay = i777[11]
  i776.defaultUpdateType = i777[12]
  i776.defaultTimeScaleIndependent = !!i777[13]
  i776.defaultEaseType = i777[14]
  i776.defaultEaseOvershootOrAmplitude = i777[15]
  i776.defaultEasePeriod = i777[16]
  i776.defaultAutoKill = !!i777[17]
  i776.defaultLoopType = i777[18]
  i776.debugMode = !!i777[19]
  i776.debugStoreTargetId = !!i777[20]
  i776.showPreviewPanel = !!i777[21]
  i776.storeSettingsLocation = i777[22]
  i776.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i777[23], i776.modules)
  i776.createASMDEF = !!i777[24]
  i776.showPlayingTweens = !!i777[25]
  i776.showPausedTweens = !!i777[26]
  return i776
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i778 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i779 = data
  i778.logBehaviour = i779[0]
  i778.nestedTweenFailureBehaviour = i779[1]
  return i778
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i780 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i781 = data
  i780.showPanel = !!i781[0]
  i780.audioEnabled = !!i781[1]
  i780.physicsEnabled = !!i781[2]
  i780.physics2DEnabled = !!i781[3]
  i780.spriteEnabled = !!i781[4]
  i780.uiEnabled = !!i781[5]
  i780.textMeshProEnabled = !!i781[6]
  i780.tk2DEnabled = !!i781[7]
  i780.deAudioEnabled = !!i781[8]
  i780.deUnityExtendedEnabled = !!i781[9]
  i780.epoOutlineEnabled = !!i781[10]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i783 = data
  var i785 = i783[0]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i785[i + 0]) );
  }
  i782.files = i784
  i782.componentToPrefabIds = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i789 = data
  i788.path = i789[0]
  request.r(i789[1], i789[2], 0, i788, 'unityObject')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i791 = data
  var i793 = i791[0]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i793[i + 0]) );
  }
  i790.scriptsExecutionOrder = i792
  var i795 = i791[1]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i795[i + 0]) );
  }
  i790.sortingLayers = i794
  var i797 = i791[2]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i797[i + 0]) );
  }
  i790.cullingLayers = i796
  i790.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i791[3], i790.timeSettings)
  i790.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i791[4], i790.physicsSettings)
  i790.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i791[5], i790.physics2DSettings)
  i790.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i791[6], i790.qualitySettings)
  i790.enableRealtimeShadows = !!i791[7]
  i790.enableAutoInstancing = !!i791[8]
  i790.enableStaticBatching = !!i791[9]
  i790.enableDynamicBatching = !!i791[10]
  i790.usePreservativeDynamicBatching = !!i791[11]
  i790.lightmapEncodingQuality = i791[12]
  i790.desiredColorSpace = i791[13]
  var i799 = i791[14]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i790.allTags = i798
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i803 = data
  i802.name = i803[0]
  i802.value = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i807 = data
  i806.id = i807[0]
  i806.name = i807[1]
  i806.value = i807[2]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i811 = data
  i810.id = i811[0]
  i810.name = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i813 = data
  i812.fixedDeltaTime = i813[0]
  i812.maximumDeltaTime = i813[1]
  i812.timeScale = i813[2]
  i812.maximumParticleTimestep = i813[3]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i815 = data
  i814.gravity = new pc.Vec3( i815[0], i815[1], i815[2] )
  i814.defaultSolverIterations = i815[3]
  i814.bounceThreshold = i815[4]
  i814.autoSyncTransforms = !!i815[5]
  i814.autoSimulation = !!i815[6]
  var i817 = i815[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i817[i + 0]) );
  }
  i814.collisionMatrix = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i821 = data
  i820.enabled = !!i821[0]
  i820.layerId = i821[1]
  i820.otherLayerId = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'material')
  i822.gravity = new pc.Vec2( i823[2], i823[3] )
  i822.positionIterations = i823[4]
  i822.velocityIterations = i823[5]
  i822.velocityThreshold = i823[6]
  i822.maxLinearCorrection = i823[7]
  i822.maxAngularCorrection = i823[8]
  i822.maxTranslationSpeed = i823[9]
  i822.maxRotationSpeed = i823[10]
  i822.baumgarteScale = i823[11]
  i822.baumgarteTOIScale = i823[12]
  i822.timeToSleep = i823[13]
  i822.linearSleepTolerance = i823[14]
  i822.angularSleepTolerance = i823[15]
  i822.defaultContactOffset = i823[16]
  i822.autoSimulation = !!i823[17]
  i822.queriesHitTriggers = !!i823[18]
  i822.queriesStartInColliders = !!i823[19]
  i822.callbacksOnDisable = !!i823[20]
  i822.reuseCollisionCallbacks = !!i823[21]
  i822.autoSyncTransforms = !!i823[22]
  var i825 = i823[23]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i825[i + 0]) );
  }
  i822.collisionMatrix = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i829 = data
  i828.enabled = !!i829[0]
  i828.layerId = i829[1]
  i828.otherLayerId = i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i831 = data
  var i833 = i831[0]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i833[i + 0]) );
  }
  i830.qualityLevels = i832
  var i835 = i831[1]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i830.names = i834
  i830.shadows = i831[2]
  i830.anisotropicFiltering = i831[3]
  i830.antiAliasing = i831[4]
  i830.lodBias = i831[5]
  i830.shadowCascades = i831[6]
  i830.shadowDistance = i831[7]
  i830.shadowmaskMode = i831[8]
  i830.shadowProjection = i831[9]
  i830.shadowResolution = i831[10]
  i830.softParticles = !!i831[11]
  i830.softVegetation = !!i831[12]
  i830.activeColorSpace = i831[13]
  i830.desiredColorSpace = i831[14]
  i830.masterTextureLimit = i831[15]
  i830.maxQueuedFrames = i831[16]
  i830.particleRaycastBudget = i831[17]
  i830.pixelLightCount = i831[18]
  i830.realtimeReflectionProbes = !!i831[19]
  i830.shadowCascade2Split = i831[20]
  i830.shadowCascade4Split = new pc.Vec3( i831[21], i831[22], i831[23] )
  i830.streamingMipmapsActive = !!i831[24]
  i830.vSyncCount = i831[25]
  i830.asyncUploadBufferSize = i831[26]
  i830.asyncUploadTimeSlice = i831[27]
  i830.billboardsFaceCameraPosition = !!i831[28]
  i830.shadowNearPlaneOffset = i831[29]
  i830.streamingMipmapsMemoryBudget = i831[30]
  i830.maximumLODLevel = i831[31]
  i830.streamingMipmapsAddAllCameras = !!i831[32]
  i830.streamingMipmapsMaxLevelReduction = i831[33]
  i830.streamingMipmapsRenderersPerFrame = i831[34]
  i830.resolutionScalingFixedDPIFactor = i831[35]
  i830.streamingMipmapsMaxFileIORequests = i831[36]
  i830.currentQualityLevel = i831[37]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i841 = data
  i840.weight = i841[0]
  i840.vertices = i841[1]
  i840.normals = i841[2]
  i840.tangents = i841[3]
  return i840
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_ObjectArgument')
  i842.m_ObjectArgumentAssemblyTypeName = i843[2]
  i842.m_IntArgument = i843[3]
  i842.m_FloatArgument = i843[4]
  i842.m_StringArgument = i843[5]
  i842.m_BoolArgument = !!i843[6]
  return i842
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[54],"55":[15],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[15],"79":[3],"80":[81],"82":[81],"36":[35],"83":[43],"17":[15],"13":[11],"84":[85],"86":[33],"87":[85],"88":[35],"89":[35],"38":[36],"42":[41,35],"43":[35],"37":[36],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[35],"98":[35],"99":[41,35],"100":[35],"101":[35],"102":[35],"103":[35],"104":[41,35],"105":[35],"106":[31],"107":[31],"32":[31],"108":[31],"109":[15],"110":[15],"111":[89],"112":[89],"113":[35,41],"114":[35],"115":[35],"116":[36],"117":[118],"119":[15],"120":[85]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Hex.Components.HexCell","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.Shader","Hex.Components.HexStack","Hex.Components.HexElement","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","Hex.Components.DisappearParticle","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","Hex.Core.OrthographicCameraFitter","UnityEngine.Light","Hex.Core.GameFlowController","Hex.Data.GameSettings","Hex.Data.LevelData","Hex.Data.ColorMaterialMapping","UnityEngine.GameObject","Hex.Components.TutorialHand","Hex.UI.PackshotScreen","Hex.Core.GridManager","Hex.Core.DragDropController","Hex.Core.ReactionSystem","Hex.Core.StackDisappearController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UI.AdaptiveAspectFitter","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Coffee.UISoftMask.AlphaHitTestTarget","Coffee.UISoftMask.MaskingShape","Coffee.UISoftMask.TerminalMaskingShape","Coffee.UISoftMask.RectTransformFitter","Coffee.UISoftMask.SoftMask","Coffee.UISoftMask.CanvasViewChangeTrigger","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Hex";

Deserializers.lunaInitializationTime = "08/28/2026 07:08:29";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Hex";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "b263fcda-6cff-4fa2-8835-ec463e02e890";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UISoftMaskInternal","UIExtraCallbacks","InitializeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Coffee","UISoftMaskInternal","RenderTextureRepository","Clear"],["Coffee","UISoftMaskInternal","MaterialRepository","Clear"],["Coffee","UISoftMaskInternal","FrameCache","Clear"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

