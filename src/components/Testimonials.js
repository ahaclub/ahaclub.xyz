import { useEffect, useState } from 'react'
import { motion, useTransform, animate, useMotionValue } from 'framer-motion'
import { gradients } from '@/utils/gradients'
import { useInView } from 'react-intersection-observer'

const colors = {
  lightblue: [gradients.lightblue[0], 'text-cyan-100', 'bg-cyan-100'],
  purple: [gradients.purple[0], 'text-fuchsia-100', 'bg-fuchsia-100'],
  orange: [gradients.orange[0], 'text-orange-100', 'bg-orange-100'],
  teal: [gradients.teal[0], 'text-green-100', 'bg-green-100'],
  violet: [gradients.violet[0], 'text-purple-100', 'bg-purple-100'],
  amber: [gradients.amber[0], 'text-orange-100', 'bg-orange-100'],
  pink: [gradients.pink[0], 'text-rose-100', 'bg-rose-100'],
  blue: [gradients.blue[0], 'text-light-blue-100', 'bg-light-blue-100'],
}

const rotation = [-2, 1, -1, 2, -1, 1]

const testimonials = [
  {
    content: `我在想，AhaClub 究竟是什么？是一个品牌？是核心团队的号召力？亦或是一个有价值的工具？我会觉得，AhaClub 是大家对于一种价值高度认同而凝聚起来的精神。`,
    tweetUrl: 'https://twitter.com/dacey_nolan/status/1303744545587441666',
    author: {
      name: 'Jacky',
      role: 'PM',
      avatar: require('@/img/avatars/jacky.png').default,
    },
  },

  {
    content: '因为感恩，所以为爱发电。',
    tweetUrl: 'https://mp.weixin.qq.com/s/PD5SK3PhSiVTs5lXePYg6A',
    author: {
      name: '闲人宇',
      role: 'PM',
      avatar: require('@/img/avatars/xianren.png').default,
    },
  },

  {
    content:
      '很幸运在我的二十岁遇见你，从第一场活动走到现在，带给我太多改变和感动，愿你茁壮成长，永远保持初心，Ahaer 们永远年轻，永远热泪盈眶',
    tweetUrl: 'https://twitter.com/maddiexcampbell/status/1303752658029740032',
    author: {
      name: 'Priscilla',
      role: 'PM/OM/HR',
      avatar: require('@/img/avatars/priscilla.png').default,
    },
  },
  {
    content:
      '“慢就是快”，当你放平心态的全情投入，并在自己舒适区的边缘慢慢尝试向外探索，你的坚持和积累就会有收获。',
    tweetUrl: 'https://mp.weixin.qq.com/s/f7sKqbv3p6BIREhAgDS0-g',
    author: {
      name: '米奇学姐',
      role: '金融从业者',
      avatar: require('@/img/avatars/miqi.jpg').default,
    },
  },
  {
    content: `近一年来，我接触了成百上千位使用 Aha 的小伙伴们，奇奇怪怪又可可爱爱，每个人对梦想的坚持都令我动容`,
    tweetUrl: 'https://mp.weixin.qq.com/s/nUch-47EFOx2ksbGHBJ2Vg',
    author: {
      name: '核桃',
      role: 'OM/Student',
      avatar: require('@/img/avatars/hetao.png').default,
    },
  },
  {
    content:
      'AhaClub 在很大程度上解决了我在求学过程中存在巨大信息差的问题，事实上许多事情都有不成文的规定，这导致我们很难在书本和已有的互联网上搜寻到答案，而 AhaClub 提供了新的选择',
    tweetUrl: 'https://twitter.com/debs_obrien/status/1243255468241420288',
    author: {
      name: `Nimin`,
      role: 'RD',
      avatar: require('@/img/avatars/github.png').default,
    },
  },
  {
    content:
      '开源并不是高级俱乐部；它就是由你这样的人所浇铸和打造。“开源”只是针对这个世界的需要修复的问题的一个梦幻术语罢了。',
    tweetUrl: 'https://twitter.com/ken_wheeler/status/1225373231139475458',
    author: {
      name: 'Open Source Guides',
      role: `Open source contributor`,
      avatar: require('@/img/avatars/github.png').default,
    },
  },
  {
    content: `不要陷入争论。在你们处理完手头上的事情之前，不要侧重于处理别人的行为。专注于你们需要什么。`,
    tweetUrl:
      'https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/',
    author: {
      name: 'Stephanie Zvan',
      role: 'The Orbit blogger',
      avatar: require('@/img/avatars/the-orbit.png').default,
    },
  },
  {
    content:
      'Aha 的初心始终是“消除信息差”，也是本播客的核心主旨。消除信息差的目的不是让大家都去冲 BAT，而是希望大学生群体，在近 20 年的被动选择后，能够在前辈优质信息分享的基础上，去做一次主动选择，无论是求职、留学、亦或考研保研乃至创业——套用我写在播客开头语的一句话：“希望前辈的经历与感悟，点亮属于你的 Aha Moment”',
    tweetUrl: 'https://mp.weixin.qq.com/s/PD5SK3PhSiVTs5lXePYg6A',
    author: {
      name: 'Mark',
      role: 'Market/Podcast',
      avatar: require('@/img/avatars/mark.png').default,
    },
  },
  // {
  //   content:
  //     '"Nearly everyone has had aha moments of sudden clarity. They can and do change our lives." "几乎每个人，都会在一生中拥有突然灵光一闪的‘aha moments’ 。这些瞬间可以，并且真的改变了我们一生。”',
  //   tweetUrl: 'https://twitter.com/rauchg/status/1225611926320738304',
  //   author: {
  //     name: 'Oprah Gail Winfrey',
  //     role: ' American talk show host',
  //     avatar: require('@/img/avatars/oprah-winfrey.jpeg').default,
  //   },
  // },
  {
    content: `社群拥有强大的能量。这种能量可能是正面的也可能是负面的，一切都取决于你如何驾驭它。随着社群的成长，要想办法让之成为建设性的力量，而非具有破坏性的。`,
    author: {
      name: 'Open Source Guides',
      role: 'Open source contributor',
      avatar: require('@/img/avatars/github.png').default,
    },
  },
]

function Testimonial({ testimonial, base, index, total }) {
  const x = useTransform(
    base,
    [0, (100 / total) * (index + 1), (100 / total) * (index + 1), 100],
    ['0%', `${(index + 1) * -100}%`, `${total * 100 - (index + 1) * 100}%`, '0%']
  )
  const [straight, setStraight] = useState(false)

  const color = colors[Object.keys(colors)[index % Object.keys(colors).length]]

  return (
    <motion.li
      className="px-3 md:px-4 flex-none"
      onMouseEnter={() => setStraight(true)}
      onMouseLeave={() => setStraight(false)}
      style={{ x }}
    >
      <motion.figure
        className="shadow-lg rounded-xl flex-none w-80 md:w-xl"
        initial={false}
        animate={straight ? { rotate: 0 } : { rotate: rotation[index % rotation.length] }}
      >
        <blockquote className="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900">
          <svg width="45" height="36" className={`mb-5 fill-current ${color[1]}`}>
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z" />
          </svg>
          {typeof testimonial.content === 'string' ? (
            <p>{testimonial.content}</p>
          ) : (
            testimonial.content
          )}
        </blockquote>
        <figcaption
          className={`flex items-center space-x-4 p-6 md:px-10 md:py-6 bg-gradient-to-br rounded-b-xl leading-6 font-semibold text-white ${color[0]}`}
        >
          <div className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <img
              src={testimonial.author.avatar}
              alt=""
              className={`w-12 h-12 rounded-full ${color[2]}`}
              loading="lazy"
            />
          </div>
          <div className="flex-auto">
            {testimonial.author.name}
            {testimonial.author.role && (
              <>
                <br />
                <span className={color[1]}>{testimonial.author.role}</span>
              </>
            )}
          </div>
          {testimonial.tweetUrl && (
            <cite className="flex">
              <a
                href={testimonial.tweetUrl}
                className="opacity-50 hover:opacity-75 transition-opacity duration-200"
              >
                <span className="sr-only">Original tweet by {testimonial.author.name}</span>
                <svg width="33" height="32" fill="currentColor">
                  <path d="M32.411 6.584c-1.113.493-2.309.826-3.566.977a6.228 6.228 0 002.73-3.437 12.4 12.4 0 01-3.944 1.506 6.212 6.212 0 00-10.744 4.253c0 .486.056.958.16 1.414a17.638 17.638 0 01-12.802-6.49 6.208 6.208 0 00-.84 3.122 6.212 6.212 0 002.762 5.17 6.197 6.197 0 01-2.813-.777v.08c0 3.01 2.14 5.52 4.983 6.091a6.258 6.258 0 01-2.806.107 6.215 6.215 0 005.803 4.312 12.464 12.464 0 01-7.715 2.66c-.501 0-.996-.03-1.482-.087a17.566 17.566 0 009.52 2.79c11.426 0 17.673-9.463 17.673-17.671 0-.267-.007-.536-.019-.803a12.627 12.627 0 003.098-3.213l.002-.004z" />
                </svg>
              </a>
            </cite>
          )}
        </figcaption>
      </motion.figure>
    </motion.li>
  )
}

export function Testimonials() {
  const x = useMotionValue(0)
  const { inView, ref: inViewRef } = useInView({ threshold: 0, rootMargin: '100px' })
  const [duration, setDuration] = useState(150)

  useEffect(() => {
    if (!inView) return

    const controls = animate(x, 100, {
      type: 'tween',
      duration,
      ease: 'linear',
      loop: Infinity,
    })

    return controls.stop
  }, [inView, x, duration])

  return (
    <div
      ref={inViewRef}
      className="relative"
      onMouseEnter={() => setDuration(250)}
      onMouseLeave={() => setDuration(150)}
    >
      <div
        className="absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 pointer-events-none"
        style={{ height: 607, maxHeight: '50vh' }}
      />
      <div className="flex overflow-hidden -my-8">
        <ul className="flex items-center w-full py-8">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={i}
              testimonial={testimonial}
              base={x}
              index={i}
              total={testimonials.length}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
