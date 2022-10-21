package teste.pratico.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import teste.pratico.spring.model.Container;

@Repository
public interface IContainer extends JpaRepository<Container, Long>{

}
