package teste.pratico.spring.model;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class Movimentacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String tipoMovimentacao;
	
	private LocalDateTime dataInicio;
	
	private LocalDateTime dataFim;
	
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "container_id", nullable = false)
    private Container container;

}
