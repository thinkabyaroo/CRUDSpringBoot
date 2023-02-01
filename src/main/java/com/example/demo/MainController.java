package com.example.demo;


import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.model.Student;

import com.example.demo.repo.StudentRepo;

//import antlr.collections.List;

//import antlr.collections.List;

@Controller
public class MainController {
	 
	 @Autowired
	 StudentRepo studentRepo;
	 //student register page
	@RequestMapping("student")
	//@ResponseBody
	public String getStudent() {
		return "student";
	}

	@RequestMapping("studentResult")
	@ResponseBody
	public String getStudentResult(@RequestBody Student st) {
		//String name=req.getParameter("studentName");
		//System.out.println(name);
		studentRepo.save(st);
		System.out.println("Name:" +st.getName()+"Grade:"+st.getGrade());
		return "ok";
	}
	
	//retrieve data from database
	@RequestMapping("stuRetrieve")
	@ResponseBody
	private List<Student> retrieveStudentData() {
		//List list=(List) studentRepo.findAll();
		System.out.println("Retrieve data from database:");
		List<Student> st=(List<Student>) studentRepo.findAll();
		return st;
	}
	
	//student edit 
	@RequestMapping(value="/studentEdit/{id}", method=RequestMethod.GET)
	//@ResponseBody
	public String getStudentEdit(@PathVariable Integer id) {
		System.out.println("id:"+id);
		return "stuEdit";
	}
	
	
	@RequestMapping(value="/studentById/{id}", method=RequestMethod.POST)
	@ResponseBody
	public Optional<Student> getStudentById(@PathVariable Integer id) {
		System.out.println("id:"+id);
		Optional<Student> st=studentRepo.findById(id);
		System.out.println("Student:"+st);
		return st;
	}
	
	//delete function
	@RequestMapping(value="/studentDeleteById/{id}", method=RequestMethod.POST)
	@ResponseBody
	public String getStudentDeleteById(@PathVariable Integer id) {
		studentRepo.deleteById(id);
		return "delete successful";
	}
	
	//student main 
	@RequestMapping("studentMainPage")
	//@ResponseBody
	public String getStudentMain() {
		return "stuMainPage";
	}
	
	

}
