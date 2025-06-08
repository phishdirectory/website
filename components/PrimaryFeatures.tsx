import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-time protection.',
    description: 'Access our constantly updated database of phishing URLs to protect your users in real-time.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure API.',
    description: 'Our API uses industry-standard security practices to keep your integration safe and reliable.',
    icon: LockClosedIcon,
  },
  {
    name: 'Community-driven.',
    description: 'Powered by security researchers and developers worldwide contributing to a safer internet.',
    icon: ServerIcon,
  },
]

export default function PrimaryFeaturesComponent() {
  return (
    <div className="bg-gray-950 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-blue-400 text-base font-semibold leading-7">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A better way to protect against phishing
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Our comprehensive phishing database provides the tools you need to keep your users safe from malicious links and fraudulent websites.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="text-blue-500 absolute left-1 top-1 h-5 w-5"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/phishdirectory.jpeg"
            width={2432}
            height={1442}
            className="w-full max-w-full rounded-xl shadow-xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  )
}
