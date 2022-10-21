package teste.pratico.spring.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import teste.pratico.spring.model.Container;
import teste.pratico.spring.service.ContainerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping ("/api/containers/")
public class ContainerRest {
	
	@Autowired
	private ContainerService containerService;
	
	@GetMapping
	private ResponseEntity<List<Container>> getAllContainers()
	{
		return ResponseEntity.ok(containerService.findAll());
	}
	
	@PostMapping
	private ResponseEntity<Container> onSaveContainer(@RequestBody Container container) 
	{
		
		System.out.println(container);
		try {
			
			Container containerSalvo = containerService.save(container);
			return ResponseEntity.created(new URI("/api/containers/" + containerSalvo.getId())).body(containerSalvo);
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		
	}
	
	@DeleteMapping (value = "delete/{id}")
	private ResponseEntity<Boolean> onDelete ( @PathVariable ("id") long idContainer)
	{
		containerService.deleteById(idContainer);
		return ResponseEntity.ok(!(containerService.findById(idContainer) != null));
	}
	
}
