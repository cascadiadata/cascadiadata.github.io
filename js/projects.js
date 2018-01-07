$(function(){
	var $projects = [],
		categories = [],
		facilities = [],
		$scrollView = $("#projects .scroll-view"),
		$selectCategories = $("select#categories"),
		$selectFacilities = $("select#facilities")
	$scrollView.children().each(function(){
		$project = $(this)
		$projects.push($project)
		_categories = $project.attr("categories").split("|")
		_facilities = $project.attr("facilities").split("|")
		_categories.forEach(function(category){
			if(!categories.includes(category)){categories.push(category)}
		})
		_facilities.forEach(function(facility){
			if(!facilities.includes(facility)){facilities.push(facility)}
		})
	})
	categories.sort()
	facilities.sort()
	categories.forEach(function(category){
		$("<option>")
			.text(category)
			.attr("value", category)
			.appendTo($selectCategories)
	})
	facilities.forEach(function(facility){
		$("<option>")
			.text(facility)
			.attr("value", facility)
			.appendTo($selectFacilities)
	})
	delete categories
	delete facilities
	$selectCategories.on("change", update)
	$selectFacilities.on("change", update)
	function update(){
		var $categoryOption = $selectCategories.find(":selected"),
			$facilityOption = $selectFacilities.find(":selected"),
			category = $categoryOption.attr("value"),
			facility = $facilityOption.attr("value")
		$selectCategories.attr("highlight", $categoryOption.index()!=0)
		$selectFacilities.attr("highlight", $facilityOption.index()!=0)
		$scrollView.animate({opacity: 0}, 250, function(){
			$scrollView.empty().scrollLeft(0).animate({opacity: 1}, 250)
			$projects.forEach(function($project){
				if((category == "all"||$project.attr("categories").split("|").includes(category)) &&
					(facility == "all"||$project.attr("facilities").split("|").includes(facility))){
					$scrollView.append($project)
				}
			})
		})
	}
})