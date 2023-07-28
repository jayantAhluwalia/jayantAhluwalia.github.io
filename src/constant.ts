export default interface FloatingTextType {
  introText: string
  afterText: string
  isHello?: boolean
  speed: "fast" | "med" | "slow"
  route: "/about" | "/work" | "/contact"
}

