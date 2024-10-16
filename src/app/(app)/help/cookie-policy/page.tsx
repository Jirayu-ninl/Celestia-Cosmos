'use client'

import Link from 'next/link'
import { CSS } from '../css'

const Page = () => {
  return (
    <>
      <h1 className='pt-24 text-4xl font-bold md:text-6xl'>Cookie Policy</h1>
      <p className='opacity-60'>Last updated: Oct 16, 2024</p>
      <hr className='mb-12 h-px w-full bg-black dark:bg-white' />
      <div className={CSS}>
        <p>
          &emsp;&emsp;&emsp;
          <Link href='https://TheIceJi.com'>
            <strong>IceJiVerse</strong>
          </Link>{' '}
          uses cookies to improve user experience, personalize content, and
          analyze traffic. This Cookie Policy explains what cookies are, how we
          use them, and your choices regarding cookie management.
        </p>
        <h2>1. What Are Cookies?</h2>
        <p>
          &emsp;&emsp;&emsp; Cookies are small text files stored on your device
          (computer, tablet, or mobile) when you visit a website. Cookies help
          websites recognize your device on future visits, making it easier to
          navigate and providing a more tailored experience.
        </p>
        <h2>2. Types of Cookies We Use</h2>
        <p>
          &emsp;&emsp;&emsp;We use various types of cookies on our website,
          including:
        </p>
        <ul>
          <li>
            <b>Necessary Cookies:</b> These cookies are essential for you to
            navigate our website and use its features, such as accessing secure
            areas and logging in. Without these cookies, services you have
            requested (such as adding items to your cart or using a secure
            login) cannot be provided.
          </li>
          <li>
            <b>Performance Cookies:</b> These cookies collect information about
            how visitors use our website, such as which pages are visited most
            often and if users receive error messages. The information collected
            is aggregated and anonymous, helping us improve website performance.
          </li>
          <li>
            <b>Functionality Cookies:</b> These cookies allow our website to
            remember choices you make, such as your language preferences or
            region, to provide enhanced, personalized features. The information
            collected by these cookies is anonymous and does not track your
            browsing activity on other websites.
          </li>
          <li>
            <b>Targeting/Advertising Cookies:</b> These cookies are used to
            deliver advertisements that are relevant to you and your interests.
            They also help limit the number of times you see an advertisement
            and measure the effectiveness of advertising campaigns. We may share
            this information with third parties for these purposes.
          </li>
        </ul>
        <h2>3. Third-Party Cookies</h2>
        <p>
          &emsp;&emsp;&emsp; We may allow third-party services, such as Google
          Analytics, Facebook, and other social media and advertising platforms,
          to set cookies on our website. These cookies are used to analyze user
          behavior, display advertisements, and integrate social media features.
          Each third party’s use of your information is governed by their
          respective privacy policies.
        </p>
        <h2>4. Your Cookie Choices</h2>
        <p>
          &emsp;&emsp;&emsp; When you first visit our website, you will see a
          cookie banner that allows you to accept or manage your cookie
          preferences. You can modify your cookie preferences at any time
          through your browser settings:
        </p>
        <ul>
          <li>
            <b>Browser Settings:</b> Most web browsers allow you to control
            cookies through the settings. You can set your browser to refuse
            cookies, delete cookies, or notify you before a cookie is set. For
            more details, please refer to your browser's help page.
          </li>
          <li>
            <b>Opt-Out Links:</b> To opt out of third-party tracking cookies
            used by advertisers, you can visit the Digital Advertising
            Alliance's opt-out page at https://optout.aboutads.info or the
            Network Advertising Initiative’s opt-out page at
            https://optout.networkadvertising.org.
          </li>
        </ul>
        <p>
          Please note that if you disable certain cookies, some parts of our
          website may not function as intended.
        </p>
        <h2>5. Changes to Our Cookie Policy</h2>
        <p>
          &emsp;&emsp;&emsp; We may update this Cookie Policy from time to time.
          Any changes will be posted on this page, and we encourage you to
          review it periodically.
        </p>
        <h2>6. Contact Us</h2>
        If you have any questions about this Cookie Policy, please contact us at{' '}
        <Link href='mailto:admin@theiceji.com' replace>
          <strong>admin@theiceji.com</strong>.
        </Link>
      </div>
    </>
  )
}

export default Page
