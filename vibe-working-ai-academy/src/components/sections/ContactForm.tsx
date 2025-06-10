'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  course: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    course: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // ここで実際のAPI呼び出しを行う
      await new Promise(resolve => setTimeout(resolve, 2000)) // 仮の遅延
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        course: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-wa-gray-100">
      <div className="container-custom max-w-4xl">
        {/* セクションタイトル */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mincho mb-4">
            無料相談・お申し込み
          </h2>
          <p className="text-lg text-wa-gray-700">
            まずはお気軽にご相談ください。専門スタッフが丁寧にご対応いたします
          </p>
        </div>

        {/* フォーム */}
        <div className="bg-wa-white rounded-lg shadow-lg p-8 md:p-10">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="mb-6">
                <svg className="w-16 h-16 text-wa-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-mincho mb-4">送信完了しました</h3>
              <p className="text-wa-gray-700 mb-6">
                お問い合わせありがとうございます。<br />
                担当者より2営業日以内にご連絡させていただきます。
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="btn-secondary"
              >
                新規お問い合わせ
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* お名前 */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-wa-gray-700 mb-2">
                    お名前 <span className="text-wa-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-wa-gray-300 rounded-md focus:ring-2 focus:ring-wa-red focus:border-transparent transition-all duration-200"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-wa-gray-700 mb-2">
                    メールアドレス <span className="text-wa-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-wa-gray-300 rounded-md focus:ring-2 focus:ring-wa-red focus:border-transparent transition-all duration-200"
                    placeholder="example@company.com"
                  />
                </div>

                {/* 会社名 */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-wa-gray-700 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-wa-gray-300 rounded-md focus:ring-2 focus:ring-wa-red focus:border-transparent transition-all duration-200"
                    placeholder="株式会社〇〇"
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-wa-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-wa-gray-300 rounded-md focus:ring-2 focus:ring-wa-red focus:border-transparent transition-all duration-200"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              {/* 興味のあるコース */}
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-wa-gray-700 mb-2">
                  興味のあるコース <span className="text-wa-red">*</span>
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-wa-gray-300 rounded-md focus:ring-2 focus:ring-wa-red focus:border-transparent transition-all duration-200"
                >
                  <option value="">選択してください</option>
                  <option value="basic">基礎コース</option>
                  <option value="expert">専門コース</option>
                  <option value="consultation">まずは相談したい</option>
                </select>
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-wa-gray-700 mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-wa-gray-300 rounded-md focus:ring-2 focus:ring-wa-red focus:border-transparent transition-all duration-200"
                  placeholder="ご質問やご要望をお聞かせください"
                />
              </div>

              {/* エラーメッセージ */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">
                    送信中にエラーが発生しました。もう一度お試しください。
                  </p>
                </div>
              )}

              {/* 送信ボタン */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary min-w-[200px] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      送信中...
                    </span>
                  ) : (
                    '送信する'
                  )}
                </button>
              </div>

              {/* プライバシーポリシー */}
              <p className="text-sm text-wa-gray-600 text-center">
                送信いただいた情報は、プライバシーポリシーに基づき適切に管理いたします。
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}