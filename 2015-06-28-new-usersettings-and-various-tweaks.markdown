---
layout: post
title: "New UserSettings and various tweaks"
date: 2015-06-28 02:45:13 +0530
comments: true
categories: gsoc
---

My last commit for xstatic was finally [merged](https://bitbucket.org/thomaswaldmann/xstatic-bootstrap/pull-request/2/updated-bootstrap-to-version-version-335).
The less file compiled for both the themes successfully and there were no issues even with `Basic theme`.

Instead of making a todo list in etherpad, I have started making issues in `Bitbucket`. Since the theme has started coming out with basic functionality. Other people who notice the bug may also create issues there.
[Issues Page](https://bitbucket.org/yask123/moin-2.0) :
<!--more-->``
RogerHaase pointed another bug which was the weird overlay of forms and menu when `hamburger` button was clicked to collapse the navbar in menu bar. This issue was fixed in [cumulative patch `#2` of CR](https://codereview.appspot.com/245670043/)

### New User Setting
<img src="http://i.imgur.com/R0dbC1R.png">
I finally implemented a new user setting page which uses bootstrap forms. This wasn't as easy at it sounds. We use `flatland` for forms. The way we rendered the form was through pre-defined macros. But the pre-defined macros also rendered unwanted stuff such as `label`,`table`,`td`.. etc.

So the way forms work in `Moin Moin` is like this.
There are `html` macros defined in `forms.html`. There is a `forms.py` while which contains  `Flatland `form related constants.
So lets say we wish to render a form for `css input` field.
Code snippet :
{% codeblock lang:python %}
forms.input(form['css_url'])
{% endcodeblock %}

We have form's class defined in `views.py` file:
In this case it looks like:

{% codeblock lang:python %}
class UserSettingsUIForm(Form):
        name = 'usersettings_ui'
        theme_name = Select.using(label=L_('Theme name')).out_of(
            ((unicode(t.identifier), t.name) for t in get_themes_list()), sort_by=1)
        css_url = URL.using(label=L_('User CSS URL'), optional=True).with_properties(
            placeholder=L_("Give the URL of your custom CSS (optional)"))
        edit_rows = Natural.using(label=L_('Editor size')).with_properties(
            placeholder=L_("Editor textarea height (0=auto)"))
        results_per_page = Natural.using(label=L_('History results per page')).with_properties(
            placeholder=L_("Number of results per page (0=no paging)"))
        submit_label = L_('Save')
{% endcodeblock %}

This class creates provides the basic skeleton for forms. The forms.py file detects the kind of html tag required for the form field, example:input text, checkbox,submit.. etc and renders the macros present in `forms.html`file.

For convenience we have macros defined which contains some unwanted stuff such as `labels` with `table form` design (`td dd,dt`)

Editing this file would have changed the behavior in other non bootstrap themes which depend on this design.
So I had to make exclusive `forms.html` template file for `modernized` theme.

I also changed the setting tabs design to match the current design of the theme.

Another issue I encountered was with the `common.css`. It contains global css style rules that are supposed to be used by all themes.
But Bootstrap contains its own style rules. I was inheriting style rules from both the files which resulted in weird layout.
The only hack was to override these styles.
If only their was something like this:
{% codeblock lang:css %}
.className{
  reset;
}
{% endcodeblock %}

So I ended up opening developers tool and under style tab it showed me the properties which were being inherited and I manually override thos styles in my `modernized theme.less` file.
This hack fixes the weird table layout in `global history` template page.
[Code Review patch(pending)](https://codereview.appspot.com/245670043/) :

#### ChangeLogs for the patch

{% codeblock %}
# Uses latest xstatic, bootstrap version: 3.3.5.1
# Fix for footer jump. Now footer won't jump in any page ( Even when the content is null).

# User setting forms rewritten in bootstrap form design fashion (without <td> <tl> tags) to suit the current design of theme.
# Macros in forms.html changed for compatibility reasons (as their is no requirement of labels and input box to be in <td>.. tags.
# written css rules in theme.less to override default styling of tables written in `common.css`.
# minor changes in footer.
# Various style improvements

Changelog2:
#overlay issues afer reducing table width to ~900 pixels and clicking on the hamburger thing
#Darker text
{% endcodeblock %}

Anyway, this is how it
###looked:

{%img http://i.imgur.com/9NHUZpw.png %}

### Now
{%img http://i.imgur.com/R0dbC1R.png %}


{%img http://i.imgur.com/sxbcX6d.png %}


{%img http://i.imgur.com/aLyGwaj.png %}


{%img http://i.imgur.com/tpaF7DJ.png %}
