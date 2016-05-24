---
layout: about
title: Bad Cover Letter Generator
subtitle: Tools For Your Writerly Needs
permalink: /badcover
---

<script
        src="/assets/myawesomeshit.js">
</script>

<div id="renderedtemplate"> </div>

<p style="text-align:center;"><img src="/assets/typewriter3.jpg"/></p><br/><br/>

<h2>Cover Letter Generator</h2><br/>
<p>Uncertain how to write a cover letter that will get your piece accepted at that shiny literary journal? Fear no more! Fill out the form below to generate your very own professional, literary cover letter:</p>

<form name="clgen" action="" method="GET">

<p> Journal:
   <input id="journal" type="text" class="form-control" name="journal" size="30" placeholder="e.g., Broad! a gentleperson's magazine"/>
   <input hidden id="journal-idx" name="journal-idx" type="integer" />
</p>

<p>Title:
   <input id="title" class="form-control" type="text" name="title" size="30" placeholder="e.g., 'The Metamorphosis'"/>
   <input hidden id="title-idx" name="title-idx" type="integer" />
</p>

<p>Your name:
   <input id="name" type="text" class="form-control" name="name" size="30" placeholder="e.g., Susan Strong"/>
   <input hidden id="name-idx" name="name-idx" type="integer" />
</p>

<p>(Optional) Bio:
   <textarea id="bio" class="form-control" name="bio" rows="5" cols="60" placeholder="If desired, list any publications, writing awards won, or other relevant information. (If this is your first publication, it is okay to say so.) Keep it short!"></textarea>
</p>

<input hidden id="bio-idx" name="bio-idx" type="integer" />
<input hidden id="con-idx" name="con-idx" type="integer" />
<input hidden id="sal-idx" name="sal-idx" type="integer" />

<p><label for="simsub">Click here if this is a simultaneous submission:</label>
  <input id="simsub" type="checkbox" name="simsub">
</p>

<input id="buttbutton" type="submit" class="btn btn-primary" name="submit" value="Generate my letter!">
</form>
