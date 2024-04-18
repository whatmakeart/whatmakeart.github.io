---
title: Dogbone Fillets Fusion 360
date: 2023-06-14T13:38:42
lastmod: 2024-04-18T07:13:37
---

A laser cutter has a very thin 0.127 mm beam, and although it can't cut a perfect inside corner, the corners it cuts are very square compared to the larger curves required by a CNC router bit. The default CNC router bit we will use on the Shopbot is ¼ in. The laser cutter beam is Because of this larger kerf on the Shopbot we need to account for that on inside corners. We will use a technique called “dog bone fillets” to make space for our slots to fit in. These are called dog bone fillets because they look like cartoon dog bones. We can add these fillets parametrically in [Fusion 360](../../3d-modeling/fusion-360/fusion-360.md). The fillets are required for square parts to fit into inside corners.

There are two methods of making dogbone fillets, one is the classic "cartoon dogbone" and the other are "invisible". They are still cut into the wood but are positioned so the connecting piece covers the cuts and therefore the fillets are not seen in the final project.

Remember that the CNC can not cut a square inside corner so you need to add dogbone or T-Bone fillets. Think about how you add to fillets so you can conceal them. This [video](https://youtu.be/fjrEmJeM-qw) shows how to add [invisible dogbone fillets](https://youtu.be/fjrEmJeM-qw) to your model. It is generally better to add the invisible dogbones after the model is complete and it is flat for manufacturing.

<div class="video-grid">
<div class="video-card">

### Invisible Dogbone Fillets

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/fjrEmJeM-qw?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
</div>

<div class="video-card">

### Dogbone Fillet Addon

<div class="iframe-16-9-container"><iframe class="youTubeIframe" src="https://www.youtube.com/embed/veXvbGSDtPk?rel=0" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
</div>

</div>
