package teste.pratico.spring.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import teste.pratico.spring.model.Movimentacao;
import teste.pratico.spring.service.MovimentacaoService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/movimentacao")
public class MovimentacaoRest {
	
	@Autowired
	private MovimentacaoService movimentacaoService;
	
	@GetMapping
	private ResponseEntity<List<Movimentacao>> getAll()
	{
		return ResponseEntity.ok(movimentacaoService.findAll());
	}
	
	@PostMapping
	private ResponseEntity<Movimentacao> onSaveMovimentacao(@RequestBody Movimentacao movimentacao) 
	{
		try {
			
			System.out.println(movimentacao);
			Movimentacao movimentacaoSalva = movimentacaoService.save(movimentacao);
			return ResponseEntity.created(new URI("/api/movimentacao/" + movimentacaoSalva.getId())).body(movimentacaoSalva);
			
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		
	}
	
	
}
