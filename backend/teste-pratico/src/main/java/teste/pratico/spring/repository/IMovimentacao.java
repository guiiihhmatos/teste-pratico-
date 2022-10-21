package teste.pratico.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import teste.pratico.spring.model.Movimentacao;

@Repository
public interface IMovimentacao extends JpaRepository<Movimentacao, Long>{

}
