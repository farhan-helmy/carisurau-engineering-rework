import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
}

export const SITE = {
    // Your site's detail?
    name: 'Carisurau Engineering',
    title: 'Carisurau - Engineering',
    description: 'Carisurau Engineering Blog',
    url: 'https://engineering.carisurau.com',
    githubUrl: 'https://github.com/farhan-helmy/ratemysurau',
    listDrafts: true,
    image: 'https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png',
    // YT video channel Id (used in media.astro)
    ytChannelId: 'UCAby1ePn-lO3WiLpKMPvXyA',
    // Optional, user/author settings (example)
    // Author: name
    author: 'Farhan Helmy', // Example: Fred K. Schott
    // Author: Twitter handler
    authorTwitter: 'farhanhelmycode', // Example: FredKSchott
    // Author: Image external source
    authorImage: 'https://avatars.githubusercontent.com/u/59960562?v=4', // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
    // Author: Bio
    authorBio: 'Junior SWE, Indie DEV, Pencinta Open Source'
}

// Ink - Theme configuration
export const PAGE_SIZE = 8
export const USE_POST_IMG_OVERLAY = false
export const USE_MEDIA_THUMBNAIL = true

export const USE_AUTHOR_CARD = true
export const USE_SUBSCRIPTION = false /* works only when USE_AUTHOR_CARD is true */
