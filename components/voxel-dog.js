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
      const rainCount = 10000 // Yağmur damlacık sayısını artırabiliriz
      const rainGeometry = new THREE.BufferGeometry()
      const rainPositions = new Float32Array(rainCount * 3)
      const rainSpeeds = new Float32Array(rainCount) // Farklı hızlar için

      for (let i = 0; i < rainCount; i++) {
        rainPositions[i * 3] = Math.random() * 400 - 200
        rainPositions[i * 3 + 1] = Math.random() * 500 - 250
        rainPositions[i * 3 + 2] = Math.random() * 400 - 200
        rainSpeeds[i] = Math.random() * 0.05 + 0.02 // Her yağmur tanesi için farklı bir hız
      }

      rainGeometry.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3))

      const rainMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.6, // Daha küçük boyutlar daha estetik olabilir
        transparent: true,
        opacity: 0.6, // Opaklığı biraz daha düşürdük
      })

      const rain = new THREE.Points(rainGeometry, rainMaterial)
      scene.add(rain)

      let req = null
      const animate = () => {
        req = requestAnimationFrame(animate)

        // Yağmur damlacıklarını hareket ettiriyoruz
        const positions = rain.geometry.attributes.position.array
        for (let i = 0; i < rainCount; i++) {
          positions[i * 3 + 1] -= rainSpeeds[i] // Farklı hızlarla yumuşak düşme

          // Hafif rüzgar etkisi (yatayda rastgele hareket)
          positions[i * 3] += Math.sin(Date.now() * 0.001 + i) * 0.01
          positions[i * 3 + 2] += Math.cos(Date.now() * 0.001 + i) * 0.01

          if (positions[i * 3 + 1] < -200) {
            positions[i * 3 + 1] = 200 // Eğer yer seviyesine ulaştıysa, yukarıya al
          }
        }

        rain.geometry.attributes.position.needsUpdate = true

        controls.update() // Kamera kontrol güncellemesi
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
