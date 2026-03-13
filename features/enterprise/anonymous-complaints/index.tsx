'use client'

import MainHeading from '@/components/common/MainHeading'
import SectionBox from '@/components/common/SectionBox'
import { ArrowLeft, Info, Send } from 'lucide-react'
import Link from 'next/link'
import { SecurityCheck } from '@/assets/CustomIcons'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { complaintSchema } from '@/schemas/ComplaintSchema'

const AnonymousComplaints = () => {

  const initialValues = {
    title: '',
    category: '',
    description: '',
    email: '',
    includeEmail: false
  }

  const handleSubmit = (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    console.log('Form submitted:', values)
    setTimeout(() => {
      setSubmitting(false)
      resetForm()
    }, 1000)
  }

  const Categories = [
    { id: 1, name: 'Harassment' },
    { id: 2, name: 'Discrimination' },
    { id: 3, name: 'Workload' },
    { id: 4, name: 'Safety' },
  ]

  return (
    <>
      <div className='relative ms-7 md:ms-0 '>
        <MainHeading
          mainHeading='Anonymous complaints'
          desc="Offer a trusted space where employees can share concerns securely and without retaliation."
        />
        <Link href={'/enterprise'} className='absolute top-2 -left-8' >
          <ArrowLeft size={24} color='#484A54' />
        </Link>
      </div>
      <SectionBox className='mt-6'>
        <div className='p-6 rounded-lg bg-white border border-[#E9EAEB] flex flex-col items-start gap-2'>
          <div className='w-10 h-10 rounded-full bg-[#E5E7D4] flex items-center justify-center'>
            <SecurityCheck />
          </div>
          <h2 className='text-xl/9.5 font-medium text-[#0F172B]'>100% private submissions</h2>
          <p className='text-xl/9.5 text-[#626366] -tracking-[1.8px] mt-0.5'>Only the authorized HR & Compliance team will review these entries. We don't log personal data in this demo.</p>
        </div>
        <div className='mt-4 p-6 rounded-lg bg-white border border-[#E9EAEB] w-full'>
          <Formik
            initialValues={initialValues}
            validationSchema={complaintSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, isSubmitting, errors, touched }) => (
              <Form>
                <div className='space-y-6 w-full'>
                  <div className='w-full'>
                    <label htmlFor="title" className='text-sm/5 font-medium text-[#18181B] block mb-2'>
                      Title or subject
                    </label>
                    <Field
                      name="title"
                      type="text"
                      placeholder='e.g Workplace stress in warehouse'
                      className={`px-3 py-2 rounded-md border w-full text-sm/5 text-[#71717A] outline-[#BE735B] ${errors.title && touched.title ? 'border-red-500' : 'border-[#E4E4E7]'
                        }`}
                    />
                    <ErrorMessage name="title" component="p" className="text-xs text-red-500 mt-1" />
                    <p className='text-xs/5 text-[#71717A] mt-2'>Summarize the situation in a few words so we can triage faster.</p>
                  </div>

                  <div className='w-full'>
                    <label htmlFor="category" className='text-sm/5 font-medium text-[#18181B] block mb-2'>
                      Topic category (optional)
                    </label>
                    <div className='flex items-center gap-2'>
                      {Categories.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setFieldValue('category', cat.name)}
                          className={`px-3 py-1.5 rounded-lg border text-sm font-medium text-center ${values.category === cat.name
                            ? 'border-[#BE735B] bg-[#BE735B] text-white'
                            : 'border-[#E4E4E7] text-[#71717A] bg-white'
                            }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                    <p className='text-xs/5 text-[#71717A] mt-2'>Select a category that best describes your complaint.</p>
                  </div>

                  <div className='w-full'>
                    <label htmlFor="description" className='text-sm/5 font-medium text-[#18181B] block mb-2'>
                      Describe the situation
                    </label>
                    <Field
                      as="textarea"
                      name="description"
                      rows={4}
                      placeholder='Describe...'
                      className={`px-3 py-2 rounded-md border w-full text-sm/5 text-[#71717A] resize-none outline-[#BE735B] ${errors.description && touched.description ? 'border-red-500' : 'border-[#E4E4E7]'
                        }`}
                    />
                    <ErrorMessage name="description" component="p" className="text-xs text-red-500 mt-1" />
                    <p className='text-xs/5 text-[#71717A] mt-2'>Skip names or identifying details if you prefer to stay anonymous</p>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Field
                      type="checkbox"
                      name="includeEmail"
                      className="w-4 h-4 accent-[#BE735B]"
                    />
                    <label htmlFor="includeEmail" className='text-sm/5 font-medium text-[#18181B]'>
                      Check to include your email for follow-up
                    </label>
                  </div>

                  {values.includeEmail && (
                    <div className="w-full">
                      <label className="text-sm font-medium block mb-2">
                        Email address
                      </label>

                      <Field
                        name="email"
                        type="email"
                        placeholder="your.email@company.com"
                        className={`px-3 py-2 rounded-md border w-full text-sm ${errors.email && touched.email
                          ? 'border-red-500'
                          : 'border-[#E4E4E7]'
                          }`}
                      />

                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-xs text-red-500 mt-1"
                      />
                    </div>
                  )}

                  <div className='p-3 bg-[#F8EEE9] rounded-xl border border-[#E5E7D4] w-full flex items-center gap-2.5'>
                    <Info size={16} color='#484A54' />
                    <p className='text-sm text-[#313219]'>This questionnaire is a tool for identifying psychosocial risks in the workplace.</p>
                  </div>

                  <div className='flex justify-end w-full'>
                    <button
                      className={`px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#BE735B] hover:bg-[#A0634A]'
                        }`}
                      type='submit'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Complaint'}
                      <Send size={16} color='white' />
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </SectionBox>
    </>
  )
}

export default AnonymousComplaints