var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointSpring' )
  var i433 = data
  i432.spring = i433[0]
  i432.damper = i433[1]
  i432.targetPosition = i433[2]
  return i432
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointMotor' )
  var i435 = data
  i434.m_TargetVelocity = i435[0]
  i434.m_Force = i435[1]
  i434.m_FreeSpin = i435[2]
  return i434
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.JointLimits' )
  var i437 = data
  i436.m_Min = i437[0]
  i436.m_Max = i437[1]
  i436.m_Bounciness = i437[2]
  i436.m_BounceMinVelocity = i437[3]
  i436.m_ContactDistance = i437[4]
  i436.minBounce = i437[5]
  i436.maxBounce = i437[6]
  return i436
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.JointDrive' )
  var i439 = data
  i438.m_PositionSpring = i439[0]
  i438.m_PositionDamper = i439[1]
  i438.m_MaximumForce = i439[2]
  i438.m_UseAcceleration = i439[3]
  return i438
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i441 = data
  i440.m_Spring = i441[0]
  i440.m_Damper = i441[1]
  return i440
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i443 = data
  i442.m_Limit = i443[0]
  i442.m_Bounciness = i443[1]
  i442.m_ContactDistance = i443[2]
  return i442
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i445 = data
  i444.m_ExtremumSlip = i445[0]
  i444.m_ExtremumValue = i445[1]
  i444.m_AsymptoteSlip = i445[2]
  i444.m_AsymptoteValue = i445[3]
  i444.m_Stiffness = i445[4]
  return i444
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i447 = data
  i446.m_LowerAngle = i447[0]
  i446.m_UpperAngle = i447[1]
  return i446
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i449 = data
  i448.m_MotorSpeed = i449[0]
  i448.m_MaximumMotorTorque = i449[1]
  return i448
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i451 = data
  i450.m_DampingRatio = i451[0]
  i450.m_Frequency = i451[1]
  i450.m_Angle = i451[2]
  return i450
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i453 = data
  i452.m_LowerTranslation = i453[0]
  i452.m_UpperTranslation = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i455 = data
  i454.position = new pc.Vec3( i455[0], i455[1], i455[2] )
  i454.scale = new pc.Vec3( i455[3], i455[4], i455[5] )
  i454.rotation = new pc.Quat(i455[6], i455[7], i455[8], i455[9])
  return i454
}

Deserializers["Hex.Components.HexCell"] = function (request, data, root) {
  var i456 = root || request.c( 'Hex.Components.HexCell' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'highlightRenderer')
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i459 = data
  request.r(i459[0], i459[1], 0, i458, 'sharedMesh')
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'additionalVertexStreams')
  i460.enabled = !!i461[2]
  request.r(i461[3], i461[4], 0, i460, 'sharedMaterial')
  var i463 = i461[5]
  var i462 = []
  for(var i = 0; i < i463.length; i += 2) {
  request.r(i463[i + 0], i463[i + 1], 2, i462, '')
  }
  i460.sharedMaterials = i462
  i460.receiveShadows = !!i461[6]
  i460.shadowCastingMode = i461[7]
  i460.sortingLayerID = i461[8]
  i460.sortingOrder = i461[9]
  i460.lightmapIndex = i461[10]
  i460.lightmapSceneIndex = i461[11]
  i460.lightmapScaleOffset = new pc.Vec4( i461[12], i461[13], i461[14], i461[15] )
  i460.lightProbeUsage = i461[16]
  i460.reflectionProbeUsage = i461[17]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i467 = data
  request.r(i467[0], i467[1], 0, i466, 'sharedMesh')
  i466.convex = !!i467[2]
  i466.enabled = !!i467[3]
  i466.isTrigger = !!i467[4]
  request.r(i467[5], i467[6], 0, i466, 'material')
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i469 = data
  i468.name = i469[0]
  i468.tagId = i469[1]
  i468.enabled = !!i469[2]
  i468.isStatic = !!i469[3]
  i468.layer = i469[4]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i471 = data
  i470.name = i471[0]
  i470.halfPrecision = !!i471[1]
  i470.useSimplification = !!i471[2]
  i470.useUInt32IndexFormat = !!i471[3]
  i470.vertexCount = i471[4]
  i470.aabb = i471[5]
  var i473 = i471[6]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( !!i473[i + 0] );
  }
  i470.streams = i472
  i470.vertices = i471[7]
  var i475 = i471[8]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i475[i + 0]) );
  }
  i470.subMeshes = i474
  var i477 = i471[9]
  var i476 = []
  for(var i = 0; i < i477.length; i += 16) {
    i476.push( new pc.Mat4().setData(i477[i + 0], i477[i + 1], i477[i + 2], i477[i + 3],  i477[i + 4], i477[i + 5], i477[i + 6], i477[i + 7],  i477[i + 8], i477[i + 9], i477[i + 10], i477[i + 11],  i477[i + 12], i477[i + 13], i477[i + 14], i477[i + 15]) );
  }
  i470.bindposes = i476
  var i479 = i471[10]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i479[i + 0]) );
  }
  i470.blendShapes = i478
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i485 = data
  i484.triangles = i485[0]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i491 = data
  i490.name = i491[0]
  var i493 = i491[1]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i493[i + 0]) );
  }
  i490.frames = i492
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i494 = root || new pc.UnityMaterial()
  var i495 = data
  i494.name = i495[0]
  request.r(i495[1], i495[2], 0, i494, 'shader')
  i494.renderQueue = i495[3]
  i494.enableInstancing = !!i495[4]
  var i497 = i495[5]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i497[i + 0]) );
  }
  i494.floatParameters = i496
  var i499 = i495[6]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i499[i + 0]) );
  }
  i494.colorParameters = i498
  var i501 = i495[7]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i501[i + 0]) );
  }
  i494.vectorParameters = i500
  var i503 = i495[8]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i503[i + 0]) );
  }
  i494.textureParameters = i502
  var i505 = i495[9]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i505[i + 0]) );
  }
  i494.materialFlags = i504
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = i509[1]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i513 = data
  i512.name = i513[0]
  i512.value = new pc.Color(i513[1], i513[2], i513[3], i513[4])
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i517 = data
  i516.name = i517[0]
  i516.value = new pc.Vec4( i517[1], i517[2], i517[3], i517[4] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'value')
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i525 = data
  i524.name = i525[0]
  i524.enabled = !!i525[1]
  return i524
}

Deserializers["Hex.Components.HexStack"] = function (request, data, root) {
  var i526 = root || request.c( 'Hex.Components.HexStack' )
  var i527 = data
  return i526
}

Deserializers["Hex.Components.HexElement"] = function (request, data, root) {
  var i528 = root || request.c( 'Hex.Components.HexElement' )
  var i529 = data
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i531 = data
  i530.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i531[0], i530.main)
  i530.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i531[1], i530.colorBySpeed)
  i530.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i531[2], i530.colorOverLifetime)
  i530.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i531[3], i530.emission)
  i530.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i531[4], i530.rotationBySpeed)
  i530.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i531[5], i530.rotationOverLifetime)
  i530.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i531[6], i530.shape)
  i530.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i531[7], i530.sizeBySpeed)
  i530.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i531[8], i530.sizeOverLifetime)
  i530.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i531[9], i530.textureSheetAnimation)
  i530.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i531[10], i530.velocityOverLifetime)
  i530.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i531[11], i530.noise)
  i530.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i531[12], i530.inheritVelocity)
  i530.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i531[13], i530.forceOverLifetime)
  i530.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i531[14], i530.limitVelocityOverLifetime)
  i530.useAutoRandomSeed = !!i531[15]
  i530.randomSeed = i531[16]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i532 = root || new pc.ParticleSystemMain()
  var i533 = data
  i532.duration = i533[0]
  i532.loop = !!i533[1]
  i532.prewarm = !!i533[2]
  i532.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[3], i532.startDelay)
  i532.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[4], i532.startLifetime)
  i532.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[5], i532.startSpeed)
  i532.startSize3D = !!i533[6]
  i532.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[7], i532.startSizeX)
  i532.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[8], i532.startSizeY)
  i532.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[9], i532.startSizeZ)
  i532.startRotation3D = !!i533[10]
  i532.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[11], i532.startRotationX)
  i532.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[12], i532.startRotationY)
  i532.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[13], i532.startRotationZ)
  i532.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i533[14], i532.startColor)
  i532.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i533[15], i532.gravityModifier)
  i532.simulationSpace = i533[16]
  request.r(i533[17], i533[18], 0, i532, 'customSimulationSpace')
  i532.simulationSpeed = i533[19]
  i532.useUnscaledTime = !!i533[20]
  i532.scalingMode = i533[21]
  i532.playOnAwake = !!i533[22]
  i532.maxParticles = i533[23]
  i532.emitterVelocityMode = i533[24]
  i532.stopAction = i533[25]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i534 = root || new pc.MinMaxCurve()
  var i535 = data
  i534.mode = i535[0]
  i534.curveMin = new pc.AnimationCurve( { keys_flow: i535[1] } )
  i534.curveMax = new pc.AnimationCurve( { keys_flow: i535[2] } )
  i534.curveMultiplier = i535[3]
  i534.constantMin = i535[4]
  i534.constantMax = i535[5]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i536 = root || new pc.MinMaxGradient()
  var i537 = data
  i536.mode = i537[0]
  i536.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i537[1], i536.gradientMin)
  i536.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i537[2], i536.gradientMax)
  i536.colorMin = new pc.Color(i537[3], i537[4], i537[5], i537[6])
  i536.colorMax = new pc.Color(i537[7], i537[8], i537[9], i537[10])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i539 = data
  i538.mode = i539[0]
  var i541 = i539[1]
  var i540 = []
  for(var i = 0; i < i541.length; i += 1) {
    i540.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i541[i + 0]) );
  }
  i538.colorKeys = i540
  var i543 = i539[2]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i543[i + 0]) );
  }
  i538.alphaKeys = i542
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemColorBySpeed()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i545[1], i544.color)
  i544.range = new pc.Vec2( i545[2], i545[3] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i549 = data
  i548.color = new pc.Color(i549[0], i549[1], i549[2], i549[3])
  i548.time = i549[4]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i553 = data
  i552.alpha = i553[0]
  i552.time = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemColorOverLifetime()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i555[1], i554.color)
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemEmitter()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[1], i556.rateOverTime)
  i556.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.rateOverDistance)
  var i559 = i557[3]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i559[i + 0]) );
  }
  i556.bursts = i558
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemBurst()
  var i563 = data
  i562.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i563[0], i562.count)
  i562.cycleCount = i563[1]
  i562.minCount = i563[2]
  i562.maxCount = i563[3]
  i562.repeatInterval = i563[4]
  i562.time = i563[5]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemRotationBySpeed()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.x)
  i564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.y)
  i564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[3], i564.z)
  i564.separateAxes = !!i565[4]
  i564.range = new pc.Vec2( i565[5], i565[6] )
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemRotationOverLifetime()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[1], i566.x)
  i566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.y)
  i566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[3], i566.z)
  i566.separateAxes = !!i567[4]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemShape()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.shapeType = i569[1]
  i568.randomDirectionAmount = i569[2]
  i568.sphericalDirectionAmount = i569[3]
  i568.randomPositionAmount = i569[4]
  i568.alignToDirection = !!i569[5]
  i568.radius = i569[6]
  i568.radiusMode = i569[7]
  i568.radiusSpread = i569[8]
  i568.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[9], i568.radiusSpeed)
  i568.radiusThickness = i569[10]
  i568.angle = i569[11]
  i568.length = i569[12]
  i568.boxThickness = new pc.Vec3( i569[13], i569[14], i569[15] )
  i568.meshShapeType = i569[16]
  request.r(i569[17], i569[18], 0, i568, 'mesh')
  request.r(i569[19], i569[20], 0, i568, 'meshRenderer')
  request.r(i569[21], i569[22], 0, i568, 'skinnedMeshRenderer')
  i568.useMeshMaterialIndex = !!i569[23]
  i568.meshMaterialIndex = i569[24]
  i568.useMeshColors = !!i569[25]
  i568.normalOffset = i569[26]
  i568.arc = i569[27]
  i568.arcMode = i569[28]
  i568.arcSpread = i569[29]
  i568.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[30], i568.arcSpeed)
  i568.donutRadius = i569[31]
  i568.position = new pc.Vec3( i569[32], i569[33], i569[34] )
  i568.rotation = new pc.Vec3( i569[35], i569[36], i569[37] )
  i568.scale = new pc.Vec3( i569[38], i569[39], i569[40] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemSizeBySpeed()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[1], i570.x)
  i570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[2], i570.y)
  i570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[3], i570.z)
  i570.separateAxes = !!i571[4]
  i570.range = new pc.Vec2( i571[5], i571[6] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemSizeOverLifetime()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.separateAxes = !!i573[4]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.mode = i575[1]
  i574.animation = i575[2]
  i574.numTilesX = i575[3]
  i574.numTilesY = i575[4]
  i574.useRandomRow = !!i575[5]
  i574.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[6], i574.frameOverTime)
  i574.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[7], i574.startFrame)
  i574.cycleCount = i575[8]
  i574.rowIndex = i575[9]
  i574.flipU = i575[10]
  i574.flipV = i575[11]
  i574.spriteCount = i575[12]
  var i577 = i575[13]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.sprites = i576
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[4], i580.radial)
  i580.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[5], i580.speedModifier)
  i580.space = i581[6]
  i580.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[7], i580.orbitalX)
  i580.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[8], i580.orbitalY)
  i580.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[9], i580.orbitalZ)
  i580.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[10], i580.orbitalOffsetX)
  i580.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[11], i580.orbitalOffsetY)
  i580.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[12], i580.orbitalOffsetZ)
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemNoise()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.separateAxes = !!i583[1]
  i582.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.strengthX)
  i582.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.strengthY)
  i582.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[4], i582.strengthZ)
  i582.frequency = i583[5]
  i582.damping = !!i583[6]
  i582.octaveCount = i583[7]
  i582.octaveMultiplier = i583[8]
  i582.octaveScale = i583[9]
  i582.quality = i583[10]
  i582.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[11], i582.scrollSpeed)
  i582.scrollSpeedMultiplier = i583[12]
  i582.remapEnabled = !!i583[13]
  i582.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[14], i582.remapX)
  i582.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[15], i582.remapY)
  i582.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[16], i582.remapZ)
  i582.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[17], i582.positionAmount)
  i582.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[18], i582.rotationAmount)
  i582.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[19], i582.sizeAmount)
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemInheritVelocity()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.mode = i585[1]
  i584.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.curve)
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemForceOverLifetime()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[1], i586.x)
  i586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.y)
  i586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[3], i586.z)
  i586.space = i587[4]
  i586.randomized = !!i587[5]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.limit)
  i588.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.limitX)
  i588.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.limitY)
  i588.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[4], i588.limitZ)
  i588.dampen = i589[5]
  i588.separateAxes = !!i589[6]
  i588.space = i589[7]
  i588.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[8], i588.drag)
  i588.multiplyDragByParticleSize = !!i589[9]
  i588.multiplyDragByParticleVelocity = !!i589[10]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i591 = data
  request.r(i591[0], i591[1], 0, i590, 'mesh')
  i590.meshCount = i591[2]
  i590.activeVertexStreamsCount = i591[3]
  i590.alignment = i591[4]
  i590.renderMode = i591[5]
  i590.sortMode = i591[6]
  i590.lengthScale = i591[7]
  i590.velocityScale = i591[8]
  i590.cameraVelocityScale = i591[9]
  i590.normalDirection = i591[10]
  i590.sortingFudge = i591[11]
  i590.minParticleSize = i591[12]
  i590.maxParticleSize = i591[13]
  i590.pivot = new pc.Vec3( i591[14], i591[15], i591[16] )
  request.r(i591[17], i591[18], 0, i590, 'trailMaterial')
  i590.applyActiveColorSpace = !!i591[19]
  i590.enabled = !!i591[20]
  request.r(i591[21], i591[22], 0, i590, 'sharedMaterial')
  var i593 = i591[23]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.sharedMaterials = i592
  i590.receiveShadows = !!i591[24]
  i590.shadowCastingMode = i591[25]
  i590.sortingLayerID = i591[26]
  i590.sortingOrder = i591[27]
  i590.lightmapIndex = i591[28]
  i590.lightmapSceneIndex = i591[29]
  i590.lightmapScaleOffset = new pc.Vec4( i591[30], i591[31], i591[32], i591[33] )
  i590.lightProbeUsage = i591[34]
  i590.reflectionProbeUsage = i591[35]
  return i590
}

Deserializers["Hex.Components.DisappearParticle"] = function (request, data, root) {
  var i594 = root || request.c( 'Hex.Components.DisappearParticle' )
  var i595 = data
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i597 = data
  i596.name = i597[0]
  i596.width = i597[1]
  i596.height = i597[2]
  i596.mipmapCount = i597[3]
  i596.anisoLevel = i597[4]
  i596.filterMode = i597[5]
  i596.hdr = !!i597[6]
  i596.format = i597[7]
  i596.wrapMode = i597[8]
  i596.alphaIsTransparency = !!i597[9]
  i596.alphaSource = i597[10]
  i596.graphicsFormat = i597[11]
  i596.sRGBTexture = !!i597[12]
  i596.desiredColorSpace = i597[13]
  i596.wrapU = i597[14]
  i596.wrapV = i597[15]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i599 = data
  i598.name = i599[0]
  i598.atlasId = i599[1]
  i598.mipmapCount = i599[2]
  i598.hdr = !!i599[3]
  i598.size = i599[4]
  i598.anisoLevel = i599[5]
  i598.filterMode = i599[6]
  var i601 = i599[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 4) {
    i600.push( UnityEngine.Rect.MinMaxRect(i601[i + 0], i601[i + 1], i601[i + 2], i601[i + 3]) );
  }
  i598.rects = i600
  i598.wrapU = i599[8]
  i598.wrapV = i599[9]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i605 = data
  i604.name = i605[0]
  i604.index = i605[1]
  i604.startup = !!i605[2]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i607 = data
  i606.aspect = i607[0]
  i606.orthographic = !!i607[1]
  i606.orthographicSize = i607[2]
  i606.backgroundColor = new pc.Color(i607[3], i607[4], i607[5], i607[6])
  i606.nearClipPlane = i607[7]
  i606.farClipPlane = i607[8]
  i606.fieldOfView = i607[9]
  i606.depth = i607[10]
  i606.clearFlags = i607[11]
  i606.cullingMask = i607[12]
  i606.rect = i607[13]
  request.r(i607[14], i607[15], 0, i606, 'targetTexture')
  i606.usePhysicalProperties = !!i607[16]
  i606.focalLength = i607[17]
  i606.sensorSize = new pc.Vec2( i607[18], i607[19] )
  i606.lensShift = new pc.Vec2( i607[20], i607[21] )
  i606.gateFit = i607[22]
  i606.commandBufferCount = i607[23]
  i606.cameraType = i607[24]
  i606.enabled = !!i607[25]
  return i606
}

Deserializers["Hex.Core.OrthographicCameraFitter"] = function (request, data, root) {
  var i608 = root || request.c( 'Hex.Core.OrthographicCameraFitter' )
  var i609 = data
  i608.requiredWidth = i609[0]
  i608.requiredHeight = i609[1]
  i608.showOverlay = !!i609[2]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i611 = data
  i610.type = i611[0]
  i610.color = new pc.Color(i611[1], i611[2], i611[3], i611[4])
  i610.cullingMask = i611[5]
  i610.intensity = i611[6]
  i610.range = i611[7]
  i610.spotAngle = i611[8]
  i610.shadows = i611[9]
  i610.shadowNormalBias = i611[10]
  i610.shadowBias = i611[11]
  i610.shadowStrength = i611[12]
  i610.shadowResolution = i611[13]
  i610.lightmapBakeType = i611[14]
  i610.renderMode = i611[15]
  request.r(i611[16], i611[17], 0, i610, 'cookie')
  i610.cookieSize = i611[18]
  i610.shadowNearPlane = i611[19]
  i610.occlusionMaskChannel = i611[20]
  i610.enabled = !!i611[21]
  return i610
}

Deserializers["Hex.Core.GameFlowController"] = function (request, data, root) {
  var i612 = root || request.c( 'Hex.Core.GameFlowController' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'gameSettings')
  request.r(i613[2], i613[3], 0, i612, 'levelData')
  request.r(i613[4], i613[5], 0, i612, 'cellPrefab')
  request.r(i613[6], i613[7], 0, i612, 'stackPrefab')
  request.r(i613[8], i613[9], 0, i612, 'elementPrefab')
  var i615 = i613[10]
  var i614 = []
  for(var i = 0; i < i615.length; i += 2) {
  request.r(i615[i + 0], i615[i + 1], 2, i614, '')
  }
  i612.hexMaterials = i614
  var i617 = i613[11]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i612.playerStackTransforms = i616
  request.r(i613[12], i613[13], 0, i612, 'colorMapping')
  request.r(i613[14], i613[15], 0, i612, 'disappearParticlePrefab')
  request.r(i613[16], i613[17], 0, i612, 'tutorialHand')
  request.r(i613[18], i613[19], 0, i612, 'packshotScreen')
  return i612
}

Deserializers["Hex.Core.GridManager"] = function (request, data, root) {
  var i620 = root || request.c( 'Hex.Core.GridManager' )
  var i621 = data
  return i620
}

Deserializers["Hex.Core.DragDropController"] = function (request, data, root) {
  var i622 = root || request.c( 'Hex.Core.DragDropController' )
  var i623 = data
  request.r(i623[0], i623[1], 0, i622, 'shadowPrefab')
  return i622
}

Deserializers["Hex.Core.ReactionSystem"] = function (request, data, root) {
  var i624 = root || request.c( 'Hex.Core.ReactionSystem' )
  var i625 = data
  return i624
}

Deserializers["Hex.Core.StackDisappearController"] = function (request, data, root) {
  var i626 = root || request.c( 'Hex.Core.StackDisappearController' )
  var i627 = data
  return i626
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

Deserializers["Coffee.UISoftMask.CanvasViewChangeTrigger"] = function (request, data, root) {
  var i636 = root || request.c( 'Coffee.UISoftMask.CanvasViewChangeTrigger' )
  var i637 = data
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i639 = data
  i638.cullTransparentMesh = !!i639[0]
  return i638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Image' )
  var i641 = data
  request.r(i641[0], i641[1], 0, i640, 'm_Sprite')
  i640.m_Type = i641[2]
  i640.m_PreserveAspect = !!i641[3]
  i640.m_FillCenter = !!i641[4]
  i640.m_FillMethod = i641[5]
  i640.m_FillAmount = i641[6]
  i640.m_FillClockwise = !!i641[7]
  i640.m_FillOrigin = i641[8]
  i640.m_UseSpriteMesh = !!i641[9]
  i640.m_PixelsPerUnitMultiplier = i641[10]
  request.r(i641[11], i641[12], 0, i640, 'm_Material')
  i640.m_Maskable = !!i641[13]
  i640.m_Color = new pc.Color(i641[14], i641[15], i641[16], i641[17])
  i640.m_RaycastTarget = !!i641[18]
  i640.m_RaycastPadding = new pc.Vec4( i641[19], i641[20], i641[21], i641[22] )
  return i640
}

Deserializers["Coffee.UISoftMask.SoftMask"] = function (request, data, root) {
  var i642 = root || request.c( 'Coffee.UISoftMask.SoftMask' )
  var i643 = data
  i642.m_MaskingMode = i643[0]
  i642.m_AlphaHitTest = !!i643[1]
  i642.m_SoftnessRange = request.d('Coffee.UISoftMaskInternal.MinMax01', i643[2], i642.m_SoftnessRange)
  i642.m_DownSamplingRate = i643[3]
  i642.m_AntiAliasingThreshold = i643[4]
  i642.m_Alpha = i643[5]
  i642.m_Softness = i643[6]
  i642.m_PartOfParent = !!i643[7]
  i642.m_ShowMaskGraphic = !!i643[8]
  return i642
}

Deserializers["Coffee.UISoftMaskInternal.MinMax01"] = function (request, data, root) {
  var i644 = root || request.c( 'Coffee.UISoftMaskInternal.MinMax01' )
  var i645 = data
  i644.m_Min = i645[0]
  i644.m_Max = i645[1]
  return i644
}

Deserializers["Hex.UI.TutorialOverlay"] = function (request, data, root) {
  var i646 = root || request.c( 'Hex.UI.TutorialOverlay' )
  var i647 = data
  request.r(i647[0], i647[1], 0, i646, 'canvasGroup')
  request.r(i647[2], i647[3], 0, i646, 'holeStack')
  request.r(i647[4], i647[5], 0, i646, 'holeTarget')
  request.r(i647[6], i647[7], 0, i646, 'worldReferenceStack')
  request.r(i647[8], i647[9], 0, i646, 'worldReferenceTarget')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i649 = data
  i648.m_Alpha = i649[0]
  i648.m_Interactable = !!i649[1]
  i648.m_BlocksRaycasts = !!i649[2]
  i648.m_IgnoreParentGroups = !!i649[3]
  i648.enabled = !!i649[4]
  return i648
}

Deserializers["Coffee.UISoftMask.MaskingShape"] = function (request, data, root) {
  var i650 = root || request.c( 'Coffee.UISoftMask.MaskingShape' )
  var i651 = data
  i650.m_MaskingMethod = i651[0]
  i650.m_ShowMaskGraphic = !!i651[1]
  i650.m_AlphaHitTest = !!i651[2]
  i650.m_AntiAliasingThreshold = i651[3]
  i650.m_SoftnessRange = request.d('Coffee.UISoftMaskInternal.MinMax01', i651[4], i650.m_SoftnessRange)
  i650.m_RaycastMethod = i651[5]
  return i650
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i653 = data
  i652.m_AspectMode = i653[0]
  i652.m_AspectRatio = i653[1]
  return i652
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'm_FirstSelected')
  i654.m_sendNavigationEvents = !!i655[2]
  i654.m_DragThreshold = i655[3]
  return i654
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i657 = data
  i656.m_HorizontalAxis = i657[0]
  i656.m_VerticalAxis = i657[1]
  i656.m_SubmitButton = i657[2]
  i656.m_CancelButton = i657[3]
  i656.m_InputActionsPerSecond = i657[4]
  i656.m_RepeatDelay = i657[5]
  i656.m_ForceModuleActive = !!i657[6]
  i656.m_SendPointerHoverToParent = !!i657[7]
  return i656
}

Deserializers["Hex.Components.TutorialHand"] = function (request, data, root) {
  var i658 = root || request.c( 'Hex.Components.TutorialHand' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'handRenderer')
  request.r(i659[2], i659[3], 0, i658, 'overlay')
  request.r(i659[4], i659[5], 0, i658, 'pointStack')
  request.r(i659[6], i659[7], 0, i658, 'pointTarget')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i661 = data
  i660.color = new pc.Color(i661[0], i661[1], i661[2], i661[3])
  request.r(i661[4], i661[5], 0, i660, 'sprite')
  i660.flipX = !!i661[6]
  i660.flipY = !!i661[7]
  i660.drawMode = i661[8]
  i660.size = new pc.Vec2( i661[9], i661[10] )
  i660.tileMode = i661[11]
  i660.adaptiveModeThreshold = i661[12]
  i660.maskInteraction = i661[13]
  i660.spriteSortPoint = i661[14]
  i660.enabled = !!i661[15]
  request.r(i661[16], i661[17], 0, i660, 'sharedMaterial')
  var i663 = i661[18]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i660.sharedMaterials = i662
  i660.receiveShadows = !!i661[19]
  i660.shadowCastingMode = i661[20]
  i660.sortingLayerID = i661[21]
  i660.sortingOrder = i661[22]
  i660.lightmapIndex = i661[23]
  i660.lightmapSceneIndex = i661[24]
  i660.lightmapScaleOffset = new pc.Vec4( i661[25], i661[26], i661[27], i661[28] )
  i660.lightProbeUsage = i661[29]
  i660.reflectionProbeUsage = i661[30]
  return i660
}

Deserializers["Hex.UI.PackshotScreen"] = function (request, data, root) {
  var i664 = root || request.c( 'Hex.UI.PackshotScreen' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'canvasGroup')
  request.r(i665[2], i665[3], 0, i664, 'clickArea')
  return i664
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Button' )
  var i667 = data
  i666.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i667[0], i666.m_OnClick)
  i666.m_Navigation = request.d('UnityEngine.UI.Navigation', i667[1], i666.m_Navigation)
  i666.m_Transition = i667[2]
  i666.m_Colors = request.d('UnityEngine.UI.ColorBlock', i667[3], i666.m_Colors)
  i666.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i667[4], i666.m_SpriteState)
  i666.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i667[5], i666.m_AnimationTriggers)
  i666.m_Interactable = !!i667[6]
  request.r(i667[7], i667[8], 0, i666, 'm_TargetGraphic')
  return i666
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i669 = data
  i668.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i669[0], i668.m_PersistentCalls)
  return i668
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i671 = data
  var i673 = i671[0]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(request.d('UnityEngine.Events.PersistentCall', i673[i + 0]));
  }
  i670.m_Calls = i672
  return i670
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'm_Target')
  i676.m_TargetAssemblyTypeName = i677[2]
  i676.m_MethodName = i677[3]
  i676.m_Mode = i677[4]
  i676.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i677[5], i676.m_Arguments)
  i676.m_CallState = i677[6]
  return i676
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i679 = data
  i678.m_Mode = i679[0]
  i678.m_WrapAround = !!i679[1]
  request.r(i679[2], i679[3], 0, i678, 'm_SelectOnUp')
  request.r(i679[4], i679[5], 0, i678, 'm_SelectOnDown')
  request.r(i679[6], i679[7], 0, i678, 'm_SelectOnLeft')
  request.r(i679[8], i679[9], 0, i678, 'm_SelectOnRight')
  return i678
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i681 = data
  i680.m_NormalColor = new pc.Color(i681[0], i681[1], i681[2], i681[3])
  i680.m_HighlightedColor = new pc.Color(i681[4], i681[5], i681[6], i681[7])
  i680.m_PressedColor = new pc.Color(i681[8], i681[9], i681[10], i681[11])
  i680.m_SelectedColor = new pc.Color(i681[12], i681[13], i681[14], i681[15])
  i680.m_DisabledColor = new pc.Color(i681[16], i681[17], i681[18], i681[19])
  i680.m_ColorMultiplier = i681[20]
  i680.m_FadeDuration = i681[21]
  return i680
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_HighlightedSprite')
  request.r(i683[2], i683[3], 0, i682, 'm_PressedSprite')
  request.r(i683[4], i683[5], 0, i682, 'm_SelectedSprite')
  request.r(i683[6], i683[7], 0, i682, 'm_DisabledSprite')
  return i682
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i685 = data
  i684.m_NormalTrigger = i685[0]
  i684.m_HighlightedTrigger = i685[1]
  i684.m_PressedTrigger = i685[2]
  i684.m_SelectedTrigger = i685[3]
  i684.m_DisabledTrigger = i685[4]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i687 = data
  i686.ambientIntensity = i687[0]
  i686.reflectionIntensity = i687[1]
  i686.ambientMode = i687[2]
  i686.ambientLight = new pc.Color(i687[3], i687[4], i687[5], i687[6])
  i686.ambientSkyColor = new pc.Color(i687[7], i687[8], i687[9], i687[10])
  i686.ambientGroundColor = new pc.Color(i687[11], i687[12], i687[13], i687[14])
  i686.ambientEquatorColor = new pc.Color(i687[15], i687[16], i687[17], i687[18])
  i686.fogColor = new pc.Color(i687[19], i687[20], i687[21], i687[22])
  i686.fogEndDistance = i687[23]
  i686.fogStartDistance = i687[24]
  i686.fogDensity = i687[25]
  i686.fog = !!i687[26]
  request.r(i687[27], i687[28], 0, i686, 'skybox')
  i686.fogMode = i687[29]
  var i689 = i687[30]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i689[i + 0]) );
  }
  i686.lightmaps = i688
  i686.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i687[31], i686.lightProbes)
  i686.lightmapsMode = i687[32]
  i686.mixedBakeMode = i687[33]
  i686.environmentLightingMode = i687[34]
  i686.ambientProbe = new pc.SphericalHarmonicsL2(i687[35])
  i686.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i687[36])
  i686.useReferenceAmbientProbe = !!i687[37]
  request.r(i687[38], i687[39], 0, i686, 'customReflection')
  request.r(i687[40], i687[41], 0, i686, 'defaultReflection')
  i686.defaultReflectionMode = i687[42]
  i686.defaultReflectionResolution = i687[43]
  i686.sunLightObjectId = i687[44]
  i686.pixelLightCount = i687[45]
  i686.defaultReflectionHDR = !!i687[46]
  i686.hasLightDataAsset = !!i687[47]
  i686.hasManualGenerate = !!i687[48]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'lightmapColor')
  request.r(i693[2], i693[3], 0, i692, 'lightmapDirection')
  request.r(i693[4], i693[5], 0, i692, 'shadowMask')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i694 = root || new UnityEngine.LightProbes()
  var i695 = data
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i703 = data
  var i705 = i703[0]
  var i704 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i705.length; i += 1) {
    i704.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i705[i + 0]));
  }
  i702.ShaderCompilationErrors = i704
  i702.name = i703[1]
  i702.guid = i703[2]
  var i707 = i703[3]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( i707[i + 0] );
  }
  i702.shaderDefinedKeywords = i706
  var i709 = i703[4]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i709[i + 0]) );
  }
  i702.passes = i708
  var i711 = i703[5]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i711[i + 0]) );
  }
  i702.usePasses = i710
  var i713 = i703[6]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i713[i + 0]) );
  }
  i702.defaultParameterValues = i712
  request.r(i703[7], i703[8], 0, i702, 'unityFallbackShader')
  i702.readDepth = !!i703[9]
  i702.hasDepthOnlyPass = !!i703[10]
  i702.isCreatedByShaderGraph = !!i703[11]
  i702.disableBatching = !!i703[12]
  i702.compiled = !!i703[13]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i717 = data
  i716.shaderName = i717[0]
  i716.errorMessage = i717[1]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i722 = root || new pc.UnityShaderPass()
  var i723 = data
  i722.id = i723[0]
  i722.subShaderIndex = i723[1]
  i722.name = i723[2]
  i722.passType = i723[3]
  i722.grabPassTextureName = i723[4]
  i722.usePass = !!i723[5]
  i722.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[6], i722.zTest)
  i722.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[7], i722.zWrite)
  i722.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[8], i722.culling)
  i722.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i723[9], i722.blending)
  i722.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i723[10], i722.alphaBlending)
  i722.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[11], i722.colorWriteMask)
  i722.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[12], i722.offsetUnits)
  i722.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[13], i722.offsetFactor)
  i722.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[14], i722.stencilRef)
  i722.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[15], i722.stencilReadMask)
  i722.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i723[16], i722.stencilWriteMask)
  i722.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i723[17], i722.stencilOp)
  i722.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i723[18], i722.stencilOpFront)
  i722.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i723[19], i722.stencilOpBack)
  var i725 = i723[20]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i725[i + 0]) );
  }
  i722.tags = i724
  var i727 = i723[21]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( i727[i + 0] );
  }
  i722.passDefinedKeywords = i726
  var i729 = i723[22]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i729[i + 0]) );
  }
  i722.passDefinedKeywordGroups = i728
  var i731 = i723[23]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i731[i + 0]) );
  }
  i722.variants = i730
  var i733 = i723[24]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i733[i + 0]) );
  }
  i722.excludedVariants = i732
  i722.hasDepthReader = !!i723[25]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i735 = data
  i734.val = i735[0]
  i734.name = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i737 = data
  i736.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[0], i736.src)
  i736.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[1], i736.dst)
  i736.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i737[2], i736.op)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i739 = data
  i738.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[0], i738.pass)
  i738.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[1], i738.fail)
  i738.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[2], i738.zFail)
  i738.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i739[3], i738.comp)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i743 = data
  i742.name = i743[0]
  i742.value = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i747 = data
  var i749 = i747[0]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( i749[i + 0] );
  }
  i746.keywords = i748
  i746.hasDiscard = !!i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i753 = data
  i752.passId = i753[0]
  i752.subShaderIndex = i753[1]
  var i755 = i753[2]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i752.keywords = i754
  i752.vertexProgram = i753[3]
  i752.fragmentProgram = i753[4]
  i752.exportedForWebGl2 = !!i753[5]
  i752.readDepth = !!i753[6]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'shader')
  i758.pass = i759[2]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i763 = data
  i762.name = i763[0]
  i762.type = i763[1]
  i762.value = new pc.Vec4( i763[2], i763[3], i763[4], i763[5] )
  i762.textureValue = i763[6]
  i762.shaderPropertyFlag = i763[7]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i765 = data
  i764.name = i765[0]
  request.r(i765[1], i765[2], 0, i764, 'texture')
  i764.aabb = i765[3]
  i764.vertices = i765[4]
  i764.triangles = i765[5]
  i764.textureRect = UnityEngine.Rect.MinMaxRect(i765[6], i765[7], i765[8], i765[9])
  i764.packedRect = UnityEngine.Rect.MinMaxRect(i765[10], i765[11], i765[12], i765[13])
  i764.border = new pc.Vec4( i765[14], i765[15], i765[16], i765[17] )
  i764.transparency = i765[18]
  i764.bounds = i765[19]
  i764.pixelsPerUnit = i765[20]
  i764.textureWidth = i765[21]
  i764.textureHeight = i765[22]
  i764.nativeSize = new pc.Vec2( i765[23], i765[24] )
  i764.pivot = new pc.Vec2( i765[25], i765[26] )
  i764.textureRectOffset = new pc.Vec2( i765[27], i765[28] )
  return i764
}

Deserializers["Hex.Data.GameSettings"] = function (request, data, root) {
  var i766 = root || request.c( 'Hex.Data.GameSettings' )
  var i767 = data
  i766.cellSize = i767[0]
  i766.cellGap = i767[1]
  i766.stackElementGap = i767[2]
  i766.pickupDuration = i767[3]
  i766.pickupHeight = i767[4]
  i766.dropDuration = i767[5]
  i766.dragLerpSpeed = i767[6]
  i766.returnSpeed = i767[7]
  i766.highlightFadeDuration = i767[8]
  i766.hexFlightDuration = i767[9]
  i766.hexFlightArcHeight = i767[10]
  i766.flightStartDelay = i767[11]
  i766.disappearDuration = i767[12]
  i766.disappearStartDelay = i767[13]
  i766.tutorialIdleTime = i767[14]
  i766.tutorialRestartDelay = i767[15]
  i766.tutorialGrabDelay = i767[16]
  i766.tutorialMoveDelay = i767[17]
  i766.stacksToWin = i767[18]
  i766.packshotDelay = i767[19]
  i766.packshotFadeDuration = i767[20]
  return i766
}

Deserializers["Hex.Data.LevelData"] = function (request, data, root) {
  var i768 = root || request.c( 'Hex.Data.LevelData' )
  var i769 = data
  i768.gridWidth = i769[0]
  i768.gridHeight = i769[1]
  var i771 = i769[2]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Utils.HexCoordinates')))
  for(var i = 0; i < i771.length; i += 1) {
    i770.add(request.d('Hex.Utils.HexCoordinates', i771[i + 0]));
  }
  i768.disabledCells = i770
  var i773 = i769[3]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.StackData')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('Hex.Data.StackData', i773[i + 0]));
  }
  i768.initialStacks = i772
  var i775 = i769[4]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.StackData')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Hex.Data.StackData', i775[i + 0]));
  }
  i768.playerStacks = i774
  i768.tutorialTargetStackIndex = i769[5]
  i768.tutorialTargetCell = request.d('Hex.Utils.HexCoordinates', i769[6], i768.tutorialTargetCell)
  return i768
}

Deserializers["Hex.Utils.HexCoordinates"] = function (request, data, root) {
  var i778 = root || request.c( 'Hex.Utils.HexCoordinates' )
  var i779 = data
  i778.q = i779[0]
  i778.r = i779[1]
  return i778
}

Deserializers["Hex.Data.StackData"] = function (request, data, root) {
  var i782 = root || request.c( 'Hex.Data.StackData' )
  var i783 = data
  i782.gridPosition = request.d('Hex.Utils.HexCoordinates', i783[0], i782.gridPosition)
  var i785 = i783[1]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.HexColor')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(i785[i + 0]);
  }
  i782.colorsFromBottomToTop = i784
  return i782
}

Deserializers["Hex.Data.ColorMaterialMapping"] = function (request, data, root) {
  var i788 = root || request.c( 'Hex.Data.ColorMaterialMapping' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('Hex.Data.ColorMaterialMapping+ColorMaterialPair')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('Hex.Data.ColorMaterialMapping+ColorMaterialPair', i791[i + 0]));
  }
  i788.mappings = i790
  return i788
}

Deserializers["Hex.Data.ColorMaterialMapping+ColorMaterialPair"] = function (request, data, root) {
  var i794 = root || request.c( 'Hex.Data.ColorMaterialMapping+ColorMaterialPair' )
  var i795 = data
  i794.hexColor = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'material')
  i794.particleColor = new pc.Color(i795[3], i795[4], i795[5], i795[6])
  return i794
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i796 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i797 = data
  i796.useSafeMode = !!i797[0]
  i796.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i797[1], i796.safeModeOptions)
  i796.timeScale = i797[2]
  i796.unscaledTimeScale = i797[3]
  i796.useSmoothDeltaTime = !!i797[4]
  i796.maxSmoothUnscaledTime = i797[5]
  i796.rewindCallbackMode = i797[6]
  i796.showUnityEditorReport = !!i797[7]
  i796.logBehaviour = i797[8]
  i796.drawGizmos = !!i797[9]
  i796.defaultRecyclable = !!i797[10]
  i796.defaultAutoPlay = i797[11]
  i796.defaultUpdateType = i797[12]
  i796.defaultTimeScaleIndependent = !!i797[13]
  i796.defaultEaseType = i797[14]
  i796.defaultEaseOvershootOrAmplitude = i797[15]
  i796.defaultEasePeriod = i797[16]
  i796.defaultAutoKill = !!i797[17]
  i796.defaultLoopType = i797[18]
  i796.debugMode = !!i797[19]
  i796.debugStoreTargetId = !!i797[20]
  i796.showPreviewPanel = !!i797[21]
  i796.storeSettingsLocation = i797[22]
  i796.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i797[23], i796.modules)
  i796.createASMDEF = !!i797[24]
  i796.showPlayingTweens = !!i797[25]
  i796.showPausedTweens = !!i797[26]
  return i796
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i799 = data
  i798.logBehaviour = i799[0]
  i798.nestedTweenFailureBehaviour = i799[1]
  return i798
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i800 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i801 = data
  i800.showPanel = !!i801[0]
  i800.audioEnabled = !!i801[1]
  i800.physicsEnabled = !!i801[2]
  i800.physics2DEnabled = !!i801[3]
  i800.spriteEnabled = !!i801[4]
  i800.uiEnabled = !!i801[5]
  i800.textMeshProEnabled = !!i801[6]
  i800.tk2DEnabled = !!i801[7]
  i800.deAudioEnabled = !!i801[8]
  i800.deUnityExtendedEnabled = !!i801[9]
  i800.epoOutlineEnabled = !!i801[10]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i803 = data
  var i805 = i803[0]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i805[i + 0]) );
  }
  i802.files = i804
  i802.componentToPrefabIds = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i809 = data
  i808.path = i809[0]
  request.r(i809[1], i809[2], 0, i808, 'unityObject')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i811 = data
  var i813 = i811[0]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i813[i + 0]) );
  }
  i810.scriptsExecutionOrder = i812
  var i815 = i811[1]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i815[i + 0]) );
  }
  i810.sortingLayers = i814
  var i817 = i811[2]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i817[i + 0]) );
  }
  i810.cullingLayers = i816
  i810.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i811[3], i810.timeSettings)
  i810.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i811[4], i810.physicsSettings)
  i810.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i811[5], i810.physics2DSettings)
  i810.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i811[6], i810.qualitySettings)
  i810.enableRealtimeShadows = !!i811[7]
  i810.enableAutoInstancing = !!i811[8]
  i810.enableStaticBatching = !!i811[9]
  i810.enableDynamicBatching = !!i811[10]
  i810.lightmapEncodingQuality = i811[11]
  i810.desiredColorSpace = i811[12]
  var i819 = i811[13]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i810.allTags = i818
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i823 = data
  i822.name = i823[0]
  i822.value = i823[1]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i827 = data
  i826.id = i827[0]
  i826.name = i827[1]
  i826.value = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i831 = data
  i830.id = i831[0]
  i830.name = i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i833 = data
  i832.fixedDeltaTime = i833[0]
  i832.maximumDeltaTime = i833[1]
  i832.timeScale = i833[2]
  i832.maximumParticleTimestep = i833[3]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i835 = data
  i834.gravity = new pc.Vec3( i835[0], i835[1], i835[2] )
  i834.defaultSolverIterations = i835[3]
  i834.bounceThreshold = i835[4]
  i834.autoSyncTransforms = !!i835[5]
  i834.autoSimulation = !!i835[6]
  var i837 = i835[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i837[i + 0]) );
  }
  i834.collisionMatrix = i836
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i841 = data
  i840.enabled = !!i841[0]
  i840.layerId = i841[1]
  i840.otherLayerId = i841[2]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'material')
  i842.gravity = new pc.Vec2( i843[2], i843[3] )
  i842.positionIterations = i843[4]
  i842.velocityIterations = i843[5]
  i842.velocityThreshold = i843[6]
  i842.maxLinearCorrection = i843[7]
  i842.maxAngularCorrection = i843[8]
  i842.maxTranslationSpeed = i843[9]
  i842.maxRotationSpeed = i843[10]
  i842.baumgarteScale = i843[11]
  i842.baumgarteTOIScale = i843[12]
  i842.timeToSleep = i843[13]
  i842.linearSleepTolerance = i843[14]
  i842.angularSleepTolerance = i843[15]
  i842.defaultContactOffset = i843[16]
  i842.autoSimulation = !!i843[17]
  i842.queriesHitTriggers = !!i843[18]
  i842.queriesStartInColliders = !!i843[19]
  i842.callbacksOnDisable = !!i843[20]
  i842.reuseCollisionCallbacks = !!i843[21]
  i842.autoSyncTransforms = !!i843[22]
  var i845 = i843[23]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i845[i + 0]) );
  }
  i842.collisionMatrix = i844
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.layerId = i849[1]
  i848.otherLayerId = i849[2]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i853[i + 0]) );
  }
  i850.qualityLevels = i852
  var i855 = i851[1]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i850.names = i854
  i850.shadows = i851[2]
  i850.anisotropicFiltering = i851[3]
  i850.antiAliasing = i851[4]
  i850.lodBias = i851[5]
  i850.shadowCascades = i851[6]
  i850.shadowDistance = i851[7]
  i850.shadowmaskMode = i851[8]
  i850.shadowProjection = i851[9]
  i850.shadowResolution = i851[10]
  i850.softParticles = !!i851[11]
  i850.softVegetation = !!i851[12]
  i850.activeColorSpace = i851[13]
  i850.desiredColorSpace = i851[14]
  i850.masterTextureLimit = i851[15]
  i850.maxQueuedFrames = i851[16]
  i850.particleRaycastBudget = i851[17]
  i850.pixelLightCount = i851[18]
  i850.realtimeReflectionProbes = !!i851[19]
  i850.shadowCascade2Split = i851[20]
  i850.shadowCascade4Split = new pc.Vec3( i851[21], i851[22], i851[23] )
  i850.streamingMipmapsActive = !!i851[24]
  i850.vSyncCount = i851[25]
  i850.asyncUploadBufferSize = i851[26]
  i850.asyncUploadTimeSlice = i851[27]
  i850.billboardsFaceCameraPosition = !!i851[28]
  i850.shadowNearPlaneOffset = i851[29]
  i850.streamingMipmapsMemoryBudget = i851[30]
  i850.maximumLODLevel = i851[31]
  i850.streamingMipmapsAddAllCameras = !!i851[32]
  i850.streamingMipmapsMaxLevelReduction = i851[33]
  i850.streamingMipmapsRenderersPerFrame = i851[34]
  i850.resolutionScalingFixedDPIFactor = i851[35]
  i850.streamingMipmapsMaxFileIORequests = i851[36]
  i850.currentQualityLevel = i851[37]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i861 = data
  i860.weight = i861[0]
  i860.vertices = i861[1]
  i860.normals = i861[2]
  i860.tangents = i861[3]
  return i860
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_ObjectArgument')
  i862.m_ObjectArgumentAssemblyTypeName = i863[2]
  i862.m_IntArgument = i863[3]
  i862.m_FloatArgument = i863[4]
  i862.m_StringArgument = i863[5]
  i862.m_BoolArgument = !!i863[6]
  return i862
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

Deserializers.buildID = "69f50115-7a35-4aaf-b391-837e326dfef1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UISoftMaskInternal","UIExtraCallbacks","InitializeOnLoad"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Coffee","UISoftMaskInternal","RenderTextureRepository","Clear"],["Coffee","UISoftMaskInternal","MaterialRepository","Clear"],["Coffee","UISoftMaskInternal","FrameCache","Clear"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

