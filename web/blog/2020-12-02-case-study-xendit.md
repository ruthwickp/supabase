---
title: Building a counter-fraud watchlist for the fintech industry
description: See how Xendit use Supabase to build a full-text search engine.
author: Rory Wilding
author_title: Supabase
author_url: https://github.com/roryw10
author_image_url: https://github.com/roryw10.png
authorURL: https://github.com/roryw10
# image: /img/supabase-november-2020.png
tags: 
    - case-study
    - nocode
---

[**TAYFA**](https://usetayfa.com) is the fastest no-code approach to create and iterate on bespoke frontends. Learn how its solo founder, Sarup Banskota, was able to launch quickly with [Supabase](https://supabase.io), Next.js, and Vercel.

<!--truncate-->

Sarup's background is in open-source, web frontends, and devtools. In the summer of 2020, he was rapidly building MVPs as he explored different problem spaces. Sarup found that reusing his frontend work across projects, wasn't as simple as he'd have liked. 

> Frontends should be as simple as: <br />
> Sign-up, drag & drop, publish. <br />
> Tweak, publish. <br />
> Tweak, publish. <br />
> That is TAYFA. <br />

*[Sarup Banskota](https://twitter.com/sarupbanskota), Founder of [TAYFA](https://usetayfa.com)*


### About Tayfa 

- Zero to MVP: **7 Days**
- Idea to 1st Payment: **30 Days**
- Creating Scalable Backend APIs: **30 mins**

### The Maker Journey

When Sarup found an interested customer, TAYFA was still a fuzzy idea in his head. As a workflow tool, the best way to demonstrate the concept was to build an MVP. His customer needed the product yesterday — there was no time to waste.

He started out with a first iteration using Next.js and Vercel for the frontend — technologies he loved, and Firebase because he was familiar with it. However, he soon realised that for his enterprise customers, self-hosting capabilities would be a deal-breaker. Moreover, he'd require sensible RESTful APIs for developing the subsequent iterations of TAYFA. 


One option was to do it the "old-school" way: Postgres on a custom server, or MongoDB. But that would mean losing momentum by getting bogged down setting up a backend. 

Luckily, Sarup discovered Supabase through the Vercel community. Open-source and built on top of Postgres, it was perfect for his future self-hosting needs and also offered him an API out of the box. The current version of TAYFA is the third iteration, and also takes advantage of  Supabase Auth, an out of the box auth layer.

Within a week, Sarup had a version ready for use that he could put in front of his customer. He went through a few iteration cycles based on feedback, and was able to satisfy all the high-level objections from 6 different stakeholders. Fast forward to a one-month later, and he had a paying business contract.  

> The speed at which TAYFA is evolving is crazy. I've seen ideas translate into live features 10 minutes after speaking on the phone.

*[Tanmai Sharma](https://www.linkedin.com/in/tanmai-sharma-9b1777/), CEO at Canopy & early TAYFA customer*

Quote from Sarup "It's not just a priority for me to be really productive and fast, if I'm successful for my clients then I should enable them to be really productive and fast too. With this approach, I was able to deliver a superhuman feature for my customer, the command K key" (Sarup)

## Prototype fast, and keep going

Thanks to Supabase  Sarup can focus on what he does best and get his final product in front of his customer. Thanks to Supabase there was no need to worry about choosing and setting up back-ends, Sarup could focus on launching fast.