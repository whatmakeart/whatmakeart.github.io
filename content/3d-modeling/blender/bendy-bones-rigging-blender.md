---
title: How to Rig Bendy Bones in Blender
date: 2025-03-28T10:29:01
lastmod: 2025-04-29T05:26:38
---

<div class="iframe-16-9-container">
<iframe class="youTubeIframe" width="560" height="315" src="https://www.youtube.com/embed/vZGmw3g_fQ4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[How to Rig Bendy Bones in Blender](https://youtu.be/vZGmw3g_fQ4)

<details>
<summary>

## Video Transcript

</summary>

In this Blender animation

tutorial, I'm going to show you
how you can make a quick bendy bone rig.

This is great for simple stylized
animations in Blender

where you want to bend a cylinder arm
or some sort of worm character.

It can be used for lots of things,
and it's very easy to set up and rig.

First,
in object mode in Blender, press shift A

and make a new armature and select
single bone.

I'll click X so I can look directly
to the side of the bone.

Over on the right hand side.

If I click the data panel
and then viewport display

instead of octahedral,
which is the default shape for bones

in Blender, I'll select b bone,
which means bendy bone.

If I tab in to edit mode,
I can select the top part of the bone.

Press G, then Z to bring it down.

If I press E to

extrude then z, I can extrude the bone up.

Now I have a section in the middle.

I need to extrude one more time,
so I'll press E,

z and then extrude up a bit.

Select the top bone.

Then press option or alt
P and disconnect the bone.

Then press option or alt P again
and clear the parent.

Now let's label the bones.

If I click on bone down at the bottom
here, we can see that this is bone two.

Let's go ahead and label this end.

The middle bone.

We can label bendy bone.

And the bottom bone will label start.

Select the bendy bone.

Then under armature at the top left select

transform scale bendy bone.

Then just move
your mouse and scale it down.

Then finally, with the bendy bone selected

under bendy bones on the right hand
side, under the bone menu.

You can select how many segments
you want your bendy bone to have.

Select something like 25 or 20.

Depending on how long your bendy bone is.

Now we're ready to set up the rigging.

For this bendy bone in Blender.

Switch from edit mode to Pose mode,

then select the top bone right here.

So this is the end bone.

Then hold shift and select the bendy bone

with control shift C or Command shift C.

You can get this menu up and we're
going to add a stretch to constraint.

Then if I click the top bone and press G
you'll see that the bendy bone follows.

But if I press R to rotate

does not work so well.

So let's fix that. Select the bendy bone.

Then at the very bottom you can see
start handle.

Select absolute

and start.

So now this uses a to start bone
for the start handle.

Then for the end handle choose
absolute and choose end.

Now if I move this around,

you can see that the bendy bone follows
the way that this rotates.

This is great,
but how do we use this in an armature

to control something in an animation?

Let's go back to object mode.

Press shift A get a mesh.

Something like a cylinder.

I'm going to press GZ1
and then S to scale.

But press shift z to scale it
only in the horizontal direction.

And then we can scale it just a little bit
on the z direction by pressing s z,

then g z.

Press Ctrl a for all transform.

before
we are able to make this into an armature,

we need to add some geometry

and segments for it
to be able to deform tab into edit mode.

Press control R to add and loops.

Use your mouse wheel to scroll
and add a bunch of end loops.

Tap back into object mode.

Select the mesh that you wanted to form.

Then hold shift.

Select the bendy bone armature

under object

parent

armature.

Deform with automatic weights.

Then select pose mode
and if I press G, I can move my bendy bone

and it rotates and bends
the armature just fine.

So this can be a really easy way to add
simple animation to stylized characters.

Or had this little cylinder be a character
all on its own.

It could bounce around
and do many different things.

So hopefully this allows you to quickly
make bendy bones in Blender.

Happy 3D modeling!

</details>
