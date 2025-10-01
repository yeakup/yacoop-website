function FontTest() {
  return (
    <div className="space-y-4 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Clash Grotesk Font Test</h2>
      
      <div className="space-y-2">
        <p className="font-light text-lg">Light (300) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-normal text-lg">Regular (400) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-medium text-lg">Medium (500) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-semibold text-lg">Semibold (600) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-bold text-lg">Bold (700) - The quick brown fox jumps over the lazy dog</p>
      </div>
      
      <div className="space-y-2 mt-6">
        <h3 className="font-semibold text-base">Different Sizes:</h3>
        <p className="text-sm font-medium">Small text (14px)</p>
        <p className="text-base font-medium">Base text (16px)</p>
        <p className="text-lg font-medium">Large text (18px)</p>
        <p className="text-xl font-medium">Extra large text (20px)</p>
        <p className="text-2xl font-bold">2XL Heading (24px)</p>
        <p className="text-3xl font-bold">3XL Heading (30px)</p>
      </div>
    </div>
  )
}

export default FontTest
