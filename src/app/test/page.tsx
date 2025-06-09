export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AIVANCE</h1>
        <p className="text-xl text-gray-600 mb-6">法人向け生成AIスクール</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">実務テンプレート</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">70%</div>
            <div className="text-sm text-gray-600">業務効率化</div>
          </div>
        </div>
        <button className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">
          7日間無料体験を始める
        </button>
      </div>
    </div>
  )
}