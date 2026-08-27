import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const RobotHero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(0, 0.2, 4.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting (Tech & Sci-Fi Rim Glow)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const cyanRimLight = new THREE.PointLight(0x00f0ff, 3.2, 8);
    cyanRimLight.position.set(-2.5, 1.5, -1);
    scene.add(cyanRimLight);

    const blueBackLight = new THREE.DirectionalLight(0x0077ff, 1.4);
    blueBackLight.position.set(0, -2, -3);
    scene.add(blueBackLight);

    // 3. Materials
    const whiteArmorMat = new THREE.MeshStandardMaterial({
      color: 0xededed,
      roughness: 0.28,
      metalness: 0.15,
    });

    const darkAccentMat = new THREE.MeshStandardMaterial({
      color: 0x181a1f,
      roughness: 0.45,
      metalness: 0.35,
    });

    const cyanGlowMat = new THREE.MeshStandardMaterial({
      color: 0x00f2ff,
      emissive: 0x00f2ff,
      emissiveIntensity: 3.5,
      roughness: 0.1,
    });

    const darkVisorMat = new THREE.MeshStandardMaterial({
      color: 0x050810,
      roughness: 0.1,
      metalness: 0.85,
    });

    // 4. Robot Model Hierarchy
    const model = new THREE.Group();
    model.name = 'RobotModel';
    model.position.set(0, -0.4, 0);

    // BODY GROUP
    const bodyGroup = new THREE.Group();
    bodyGroup.name = 'Body';

    // Torso / Chest Armor
    const torsoGeo = new THREE.CylinderGeometry(0.44, 0.36, 0.72, 32);
    const torsoMesh = new THREE.Mesh(torsoGeo, whiteArmorMat);
    torsoMesh.position.y = 0.36;
    torsoMesh.castShadow = true;
    bodyGroup.add(torsoMesh);

    // Chest Plate Accent
    const chestPlateGeo = new THREE.BoxGeometry(0.48, 0.28, 0.22);
    const chestPlate = new THREE.Mesh(chestPlateGeo, darkAccentMat);
    chestPlate.position.set(0, 0.48, 0.32);
    bodyGroup.add(chestPlate);

    // Chest LED Indicator
    const chestLedGeo = new THREE.BoxGeometry(0.12, 0.04, 0.04);
    const chestLed = new THREE.Mesh(chestLedGeo, cyanGlowMat);
    chestLed.position.set(0, 0.48, 0.44);
    bodyGroup.add(chestLed);

    // Waist / Belt
    const beltGeo = new THREE.CylinderGeometry(0.38, 0.4, 0.16, 32);
    const beltMesh = new THREE.Mesh(beltGeo, darkAccentMat);
    beltMesh.position.y = 0.05;
    bodyGroup.add(beltMesh);

    // Pelvis & Legs
    const pelvisGeo = new THREE.SphereGeometry(0.34, 32, 16);
    const pelvis = new THREE.Mesh(pelvisGeo, whiteArmorMat);
    pelvis.position.y = -0.05;
    pelvis.scale.set(1, 0.7, 0.9);
    bodyGroup.add(pelvis);

    // Left Leg
    const leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-0.25, -0.2, 0);
    const thighGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.32, 16);
    const leftThigh = new THREE.Mesh(thighGeo, whiteArmorMat);
    leftThigh.position.y = -0.12;
    leftLegGroup.add(leftThigh);
    const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.32), darkAccentMat);
    leftFoot.position.set(0, -0.32, 0.06);
    leftLegGroup.add(leftFoot);
    bodyGroup.add(leftLegGroup);

    // Right Leg
    const rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(0.25, -0.2, 0);
    const rightThigh = new THREE.Mesh(thighGeo, whiteArmorMat);
    rightThigh.position.y = -0.12;
    rightLegGroup.add(rightThigh);
    const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.32), darkAccentMat);
    rightFoot.position.set(0, -0.32, 0.06);
    rightLegGroup.add(rightFoot);
    bodyGroup.add(rightLegGroup);

    // Left Arm
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.52, 0.55, 0);
    const shoulderGeo = new THREE.SphereGeometry(0.15, 16, 16);
    const leftShoulder = new THREE.Mesh(shoulderGeo, whiteArmorMat);
    leftArmGroup.add(leftShoulder);
    const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.35, 16), whiteArmorMat);
    leftArm.position.set(-0.06, -0.22, 0.04);
    leftArm.rotation.z = -0.15;
    leftArmGroup.add(leftArm);
    const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), darkAccentMat);
    leftHand.position.set(-0.1, -0.42, 0.08);
    leftArmGroup.add(leftHand);
    bodyGroup.add(leftArmGroup);

    // Right Arm
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.52, 0.55, 0);
    const rightShoulder = new THREE.Mesh(shoulderGeo, whiteArmorMat);
    rightArmGroup.add(rightShoulder);
    const rightArm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 0.35, 16), whiteArmorMat);
    rightArm.position.set(0.06, -0.22, 0.04);
    rightArm.rotation.z = 0.15;
    rightArmGroup.add(rightArm);
    const rightHand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), darkAccentMat);
    rightHand.position.set(0.1, -0.42, 0.08);
    rightArmGroup.add(rightHand);
    bodyGroup.add(rightArmGroup);

    model.add(bodyGroup);

    // HEAD GROUP
    const headGroup = new THREE.Group();
    headGroup.name = 'Head';
    headGroup.position.set(0, 0.78, 0);

    // Helmet Base (Round Chibi Dome)
    const helmetGeo = new THREE.SphereGeometry(0.62, 36, 36);
    const helmet = new THREE.Mesh(helmetGeo, whiteArmorMat);
    helmet.castShadow = true;
    headGroup.add(helmet);

    // Helmet Center Stripe Accent
    const stripeGeo = new THREE.BoxGeometry(0.16, 0.8, 0.8);
    const stripe = new THREE.Mesh(stripeGeo, darkAccentMat);
    stripe.position.set(0, 0.22, 0.06);
    headGroup.add(stripe);

    // Helmet Visor / Face Screen
    const visorGeo = new THREE.CylinderGeometry(0.54, 0.5, 0.32, 32, 1, false, -Math.PI / 3, (2 * Math.PI) / 3);
    const visor = new THREE.Mesh(visorGeo, darkVisorMat);
    visor.position.set(0, 0.02, 0.12);
    headGroup.add(visor);

    // EYES GROUP (Glowing Cyan LED Visor Eyes)
    const eyesGroup = new THREE.Group();
    eyesGroup.name = 'Eyes';
    eyesGroup.position.set(0, 0.04, 0.55);

    // Left Eye Segment
    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.065, 0.03), cyanGlowMat);
    leftEye.position.set(-0.16, 0, 0);
    eyesGroup.add(leftEye);

    // Right Eye Segment
    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.065, 0.03), cyanGlowMat);
    rightEye.position.set(0.16, 0, 0);
    eyesGroup.add(rightEye);

    // Eye Sub-Glow Dots
    const leftDot = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.03), cyanGlowMat);
    leftDot.position.set(-0.28, 0.02, 0);
    eyesGroup.add(leftDot);

    const rightDot = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.03), cyanGlowMat);
    rightDot.position.set(0.28, 0.02, 0);
    eyesGroup.add(rightDot);

    headGroup.add(eyesGroup);

    // Ear Discs / Cyber Headphones
    const earGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.12, 24);
    const leftEar = new THREE.Mesh(earGeo, whiteArmorMat);
    leftEar.rotation.z = Math.PI / 2;
    leftEar.position.set(-0.6, 0.02, 0);
    const leftEarRing = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 16, 24), cyanGlowMat);
    leftEarRing.rotation.y = Math.PI / 2;
    leftEarRing.position.set(-0.66, 0.02, 0);
    headGroup.add(leftEar);
    headGroup.add(leftEarRing);

    const rightEar = new THREE.Mesh(earGeo, whiteArmorMat);
    rightEar.rotation.z = Math.PI / 2;
    rightEar.position.set(0.6, 0.02, 0);
    const rightEarRing = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 16, 24), cyanGlowMat);
    rightEarRing.rotation.y = Math.PI / 2;
    rightEarRing.position.set(0.66, 0.02, 0);
    headGroup.add(rightEar);
    headGroup.add(rightEarRing);

    model.add(headGroup);
    scene.add(model);

    // 5. Mouse & Tracking State
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);

      // Normalized coordinates (-1 to 1)
      targetMouseX = Math.max(-1.2, Math.min(1.2, x / (window.innerWidth * 0.45)));
      targetMouseY = Math.max(-1.2, Math.min(1.2, y / (window.innerHeight * 0.45)));
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // 6. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    // 7. Animation Loop with Exact Formula
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse
      currentMouseX += (targetMouseX - currentMouseX) * 0.08;
      currentMouseY += (targetMouseY - currentMouseY) * 0.08;

      const mouseX = currentMouseX;
      const mouseY = currentMouseY;

      // Exact Formula Requested by User:
      const head = model.getObjectByName('Head');
      const body = model.getObjectByName('Body');
      const eyes = model.getObjectByName('Eyes');

      if (head) {
        head.rotation.y = mouseX * 0.45;
        head.rotation.x = mouseY * 0.25;
      }

      if (body) {
        body.rotation.y = mouseX * 0.10;
      }

      if (eyes) {
        eyes.position.x = mouseX * 0.03;
        eyes.position.y = -mouseY * 0.02 + 0.04; // preserve baseline height + dynamic offset
      }

      // Idle subtle breathing loop
      model.position.y = -0.4 + Math.sin(elapsedTime * 2.2) * 0.025;
      if (leftArmGroup && rightArmGroup) {
        leftArmGroup.rotation.x = Math.sin(elapsedTime * 1.8) * 0.05;
        rightArmGroup.rotation.x = -Math.sin(elapsedTime * 1.8) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[420px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none relative"
      aria-label="Modelo 3D Interativo do Robô"
    />
  );
};
