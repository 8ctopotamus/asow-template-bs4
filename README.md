# Adding Accordion Panels In GreenRope
### Instructions for Brian

These collapsible accordions are created using <a href="http://getbootstrap.com/javascript/#collapse">Bootstrap's Collapse component</a>.

```
<!--
	Make sure that you update anywhere it says "collapseNUM" or "headingNUM"
	so that "NUM" is replaced by the number this of this collapse panel.

	Example: If this is the fifth collapse, they will now read "collapseFive" and "headingFive".
	This is how the collapse knows which accordion to open.

  Make sure you paste this inside the <div> with the ID of "accordion".
 -->

<!-- Panel Component -->
<div class="panel panel-default">
	<div class="panel-heading" id="headingNUM" role="tab">
		<h3 class="panel-title">
			<a aria-controls="collapseNUM" aria-expanded="false" class="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseNUM" role="button">
				<!-- PUT HEADING HERE -->
			</a>
		</h3>
	</div>

	<div aria-labelledby="headingNUM" class="panel-collapse collapse" id="collapseNUM" role="tabpanel">
		<div class="panel-body">
			<!-- Put Your Content Here -->
		</div>
	</div>
</div>
<!-- END of Panel Component -->
```
