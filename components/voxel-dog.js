import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

const VoxelRain = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, scW / scH, 0.1, 1000)
      camera.position.set(0, 10, 20)
      scene.add(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5)
      scene.add(ambientLight)

      // Kamera fareyi takip edecek şekilde ayarlandı
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true // Kameranın hareketini yumuşatmak için
      controls.dampingFactor = 0.1
      controls.enableZoom = true // Kullanıcı yakınlaştırma/uzaklaştırma yapabilir
      controls.autoRotate = false // Otomatik döndürmeyi kapattık
      controls.target.set(0, 0, 0)

      // Zoom sınırlarını belirliyoruz
      controls.minDistance = 5 // Minimum uzaklık (zoom-in sınırı)
      controls.maxDistance = 50 // Maksimum uzaklık (zoom-out sınırı)

      // Yağmur damlacıklarını oluşturuyoruz
      const rainCount = 12000
      const rainGeometry = new THREE.BufferGeometry()
      const rainPositions = new Float32Array(rainCount * 3)
      const rainColors = new Float32Array(rainCount * 3)
      const rainSpeeds = new Float32Array(rainCount)
      const rainSizes = new Float32Array(rainCount)

      const colorPalette = [
        new THREE.Color(0x87CEEB), // Sky Blue
        new THREE.Color(0x4682B4), // Steel Blue
        new THREE.Color(0xADD8E6), // Light Blue
        new THREE.Color(0xB0E0E6), // Powder Blue
        new THREE.Color(0x00BFFF)  // Deep Sky Blue
      ]

      for (let i = 0; i < rainCount; i++) {
        rainPositions[i * 3] = Math.random() * 400 - 200
        rainPositions[i * 3 + 1] = Math.random() * 500 - 250
        rainPositions[i * 3 + 2] = Math.random() * 400 - 200

        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
        rainColors[i * 3] = color.r
        rainColors[i * 3 + 1] = color.g
        rainColors[i * 3 + 2] = color.b

        rainSpeeds[i] = Math.random() * 0.1 + 0.05 // Hızları düşürdük
        rainSizes[i] = Math.random() * 0.2 + 0.1 // Boyutları küçülttük
      }

      rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3))
      rainGeometry.setAttribute('color', new THREE.BufferAttribute(rainColors, 3))
      rainGeometry.setAttribute('size', new THREE.BufferAttribute(rainSizes, 1))

      const rainMaterial = new THREE.PointsMaterial({
        size: 0.5, // Genel boyutu küçülttük
        transparent: true,
        opacity: 0.6,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      })

      const rain = new THREE.Points(rainGeometry, rainMaterial)
      scene.add(rain)

      let req = null
      const animate = () => {
        req = requestAnimationFrame(animate)

        const positions = rain.geometry.attributes.position.array
        const colors = rain.geometry.attributes.color.array
        const sizes = rain.geometry.attributes.size.array

        for (let i = 0; i < rainCount; i++) {
          positions[i * 3 + 1] -= rainSpeeds[i]

          // Yumuşak dalga efekti
          positions[i * 3] += Math.sin(Date.now() * 0.0005 + i) * 0.02 // Dalga hızını ve genliğini azalttık
          positions[i * 3 + 2] += Math.cos(Date.now() * 0.001 + i) * 0.02

          if (positions[i * 3 + 1] < -250) {
            positions[i * 3 + 1] = 250
            // Renk geçişi efekti
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
            colors[i * 3] = color.r
            colors[i * 3 + 1] = color.g
            colors[i * 3 + 2] = color.b
          }

          // Boyut animasyonu
          sizes[i] = rainSizes[i] * (Math.sin(Date.now() * 0.002 + i) * 0.1 + 0.9) // Boyut değişimini azalttık
        }

        rain.geometry.attributes.position.needsUpdate = true
        rain.geometry.attributes.color.needsUpdate = true
        rain.geometry.attributes.size.needsUpdate = true

        // Opaklık animasyonu
        rainMaterial.opacity = 0.5 + Math.sin(Date.now() * 0.001) * 0.1 // Opaklık değişimini azalttık

        controls.update()
        renderer.render(scene, camera)
      }

      animate()
      setLoading(false)

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelRain