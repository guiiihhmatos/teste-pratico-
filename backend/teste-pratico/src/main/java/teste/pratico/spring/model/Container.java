package teste.pratico.spring.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;

import lombok.Data;

@Entity
@Data
public class Container {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String cliente;
	
	private String numeroContainer;
	
	private int tipo;

	private String status;
	
	private String categoria;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "container", targetEntity = Movimentacao.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Movimentacao> movimentacao;
}
