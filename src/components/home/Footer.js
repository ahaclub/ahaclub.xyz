import Link from 'next/link'
import clsx from 'clsx'
import styles from './Footer.module.css'
import { Logo } from '@/components/Logo'

const footerNav = {
  'Getting started': {
    showName: '相关采访（INTERVIEW）',
    className: 'row-span-2',
    items: [
      { title: '向上生长，向下扎根', href: 'https://mp.weixin.qq.com/s/5cFSMq7rcgFVYIbuhImxSg' },
      {
        title: '红杉学者：不设限的斜杠青年',
        href: 'https://mp.weixin.qq.com/s/ezb8H7hWM1f2gUg6d8Njxw',
      },
      {
        title: '少楠：我想改善一代人的思考方式',
        href: 'https://mp.weixin.qq.com/s/tkgaIp7mQfMJMZuI2igVyQ',
      },
      {
        title: '上岸后，想对一年前的自己说些什么',
        href: 'https://mp.weixin.qq.com/s/dpEJ4xEnH_bwlQpEXUGDXA',
      },
      {
        title: '入职后，我过着怎样的生活',
        href: 'https://mp.weixin.qq.com/s/tkgaIp7mQfMJMZuI2igVyQ',
      },
      { title: '欢迎来到成年人的世界', href: 'https://mp.weixin.qq.com/s/ZHvzhAUBq_9JTT00ckcU-A' },
    ],
  },
  'Core concepts': {
    showName: '核心概念 (Core Concepts)',
    className: 'row-span-2',
    items: [
      { title: '什么是 Aha Moment', href: 'https://www.yuque.com/ahaclub/blog/name' },
      {
        title: '如无必要，勿增实体',
        href: 'https://www.yuque.com/ahaclub/blog/nctu8z',
      },
      { title: '同 Ant-D 一致的设计价值观', href: 'https://ant.design/docs/spec/values-cn' },
      { title: '既受天泽，当扶羸弱，拥抱开源', href: 'https://opensource.guide/zh-hans/' },
    ],
  },
  Customization: {
    showName: '帮助（HELP）',
    className: 'row-span-2',
    items: [
      { title: '这里是 AhaClub', href: 'https://mp.weixin.qq.com/s/wF5B2OrC8jDQJOvDUFXq-A' },
      {
        title: '感恩2020 | 愿你有更好的2021',
        href: 'https://mp.weixin.qq.com/s/PD5SK3PhSiVTs5lXePYg6A',
      },
      { title: 'Aha 一周年了', href: 'https://1.ahaclub.net' },
      { title: '加入我们', href: 'https://mp.weixin.qq.com/s/Ehj2wVjU-nro90Ukbxhxng' },
    ],
  },
  Community: {
    showName: '社区（COMMUNUTY）',
    items: [
      { title: 'AhaFM-喜马拉雅', href: 'https://www.ximalaya.com/gerenchengzhang/40742254/' },
      {
        title: 'AhaFM-小宇宙',
        href: 'https://www.xiaoyuzhoufm.com/podcast/5f33c9c59504bbdb779dffd5',
      },
      { title: 'Bilibili', href: 'https://space.bilibili.com/64662194' },
      { title: '知乎', href: 'https://www.zhihu.com/people/ahaclub/posts' },
      { title: '语雀', href: 'https://www.yuque.com/ahaclub' },
      { title: 'GitHub', href: 'https://github.com/ahaclub' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul
          className={`${styles.nav} text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10`}
        >
          {Object.keys(footerNav).map((section, i) => (
            <li key={section} className={clsx('space-y-5', footerNav[section].className)}>
              <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                {footerNav[section].showName}
              </h2>
              <ul className="space-y-4">
                {footerNav[section].items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <a className="hover:text-gray-900 transition-colors duration-200">
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="pt-4 flex-col">
          <div className="pr-2 pb-2 flex">
            <Logo height="26" />
          </div>
          <Link href="https://beian.miit.gov.cn/">
            <a className="hover:text-gray-900 transition-colors duration-200 text-sm">
              © 2020-2024 AhaClub.net 沪ICP备2020029688号-1
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
