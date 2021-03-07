---
path: "/posts/personal-metrics"
date: "2021-02-19"
title: "Personal metrics"
tags: ["tech"]
---

In engineering we're used to using metrics to monitor the health of our systems.
This post explores using the same idea to monitor ourselves.
Why? This is something new I'm trying after a recent job change.
It's easy for me to look back now and see warning signs and red flags and feel that I should have left earlier.
But at the time I was too involved to see that.
For the sake of my mental health I'd like to avoid something similar happening again.
A big part of that is having the vocabulary to identify what is ok, and what isn't.

<!-- end -->

Some terms:

_safety:_ 

_fitness:_ Your ability to do what you need to live your life on a daily basis. This includes both your job, and things you do outside your job.

_health:_ Put together your _safety_ and _fitness_ are an indicator of your overall _health._

These things change over time and that's normal. That's why it's important to check in with yourself and see how you're doing, and that's where personal metrics can help.

You will likely be familiar with the idea of a traffic light system for alerts on your system.
(link to Rouan's video about testing in production)

It's common to use a pattern like this to  help observe the health of your software applications:

Green: Add a `tick` when a user successfully completes an action, e.g. logs in to your website.
You can use the number of `tick`s to establish a healthy pattern for your application - how many users log in over the course of a day.
And if that number drops you can alert (https://engineering.tes.com/post/monitoring-part-3).

Amber: Add a `warning` if ?? A `warning` may be nothing to worry about if it happens once, but if you have say 5 warnings fired in the space of a minute, maybe that's something you're concerned about.

Red: Add an `error` if ?? An `error` is something that needs investigating immediately. It interrupts normal flow and must be addressed.

How you define each of these levels will be different for each application. In the same way, when we define personal metrics, they will be different for everyone.

So, how does this translate to personal metrics, and how can we measure them?
 
First it's important to define what your metrics are.

Green: this should be things that you do that make you fulfilled

Amber: things that make you feel drained

Red: things that make you feel unsafe. Something that you have a strong negative reaction to, maybe you want to run away, or fight.

For me, this looks something like:

Green: Exercise. Coffee breaks. Feeling heard. Learning.

Amber: Time pressure. Feeling in the dark about something. Whispers / rumours. Working on weekends.

Red: layoffs. Dishonesty.

As with your software applications, it can be much easier to define the "happy paths" - this is normal. There may be some red alerts that are easy and obvious to identify: maybe they've happened to you or someone you know in the past.
But it's likely that when big events or changes happen that are red alerts, you'll know about it. Your gut instinct will tell you.

Great, now you have an idea of what your metrics are (and you can add more of these over time as you get used to it).
How do you observe them?
For now I'm keeping it simple.
PHOTO OF CALENDAR WITH STICKIES.
The green tallies are my healthy ticks. The amber dots are warnings.
Luckily there aren't any red alerts yet!
This indicates that I'm currently feeling pretty healthy.
I already know that - I've started a great new job and I'm excited and optimistic about it!
But there are a few warning signs, and at the end of the week I address these.
Recently we've had some tight delivery deadlines which has meant working long hours with few breaks.
My team discussed this and all recognised that it wasn't sustainable and are putting some things{!} in place to stop this happening again.

Finally, remember that over time you may need to change what you are measuring.
Amazon started out as an online bookstore.
At that point, it makes sense to measure how many books they sold over a day or week.
Now Amazon is the world's largest online retailer and a prominent cloud services provider.
Measuring how many books they sell is no longer a useful metric. 
The same will happen for you.
The things that contribute to your overall health are likely to change as you grow.
Once you've defined your metrics, every so often ask yourself:
- are these metrics still relevant for me?
- do they align with my personal values? (Link to the personal values workshop post)
