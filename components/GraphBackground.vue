<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

interface GraphNode {
  x: number
  y: number
  vx: number
  vy: number
}

const NODE_COUNT = 55
const MAX_SPEED = 0.3
const LINK_DISTANCE = 140
const STORAGE_KEY = 'graph-background-enabled'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const enabled = ref(true)

let ctx: CanvasRenderingContext2D | null = null
let nodes: GraphNode[] = []
let rafId = 0

function createNodes(width: number, height: number): GraphNode[] {
  return Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() * 2 - 1) * MAX_SPEED,
    vy: (Math.random() * 2 - 1) * MAX_SPEED
  }))
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function frame() {
  const canvas = canvasRef.value
  if (!canvas || !ctx) return
  const { width, height } = canvas
  ctx.clearRect(0, 0, width, height)

  for (const node of nodes) {
    node.x += node.vx
    node.y += node.vy
    if (node.x < 0) node.x += width
    if (node.x > width) node.x -= width
    if (node.y < 0) node.y += height
    if (node.y > height) node.y -= height
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i]
      const b = nodes[j]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < LINK_DISTANCE) {
        const alpha = (1 - dist / LINK_DISTANCE) * 0.5
        ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }

  ctx.fillStyle = 'rgba(96, 165, 250, 0.8)'
  for (const node of nodes) {
    ctx.beginPath()
    ctx.arc(node.x, node.y, 1.8, 0, Math.PI * 2)
    ctx.fill()
  }

  rafId = requestAnimationFrame(frame)
}

function start() {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx = canvas.getContext('2d')
  if (!ctx) return
  resize()
  if (nodes.length === 0) {
    nodes = createNodes(canvas.width, canvas.height)
  }
  rafId = requestAnimationFrame(frame)
}

function stop() {
  cancelAnimationFrame(rafId)
  const canvas = canvasRef.value
  if (canvas && ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

function toggle() {
  enabled.value = !enabled.value
  localStorage.setItem(STORAGE_KEY, String(enabled.value))
}

watch(enabled, (on) => {
  if (on) {
    start()
  } else {
    stop()
  }
})

onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) {
    enabled.value = stored === 'true'
  } else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    enabled.value = false
  }
  window.addEventListener('resize', resize)
  if (enabled.value) start()
})

onBeforeUnmount(() => {
  stop()
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas ref="canvasRef" class="graph-canvas" aria-hidden="true" />
  <button
    class="graph-toggle"
    :class="{ off: !enabled }"
    :aria-pressed="enabled"
    :title="enabled ? 'Disable background graph' : 'Enable background graph'"
    @click="toggle"
  >
    ⌬
  </button>
</template>
