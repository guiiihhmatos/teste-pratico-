package teste.pratico.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import teste.pratico.spring.model.Container;
import teste.pratico.spring.repository.IContainer;

@Service
public class ContainerService {
	
	@Autowired
	private IContainer containerRepository;

	public List<Container> findAll() {
		
		return containerRepository.findAll();
	}


	public <S extends Container> S save(S entity) {
		return containerRepository.save(entity);
	}

	public void deleteById(Long id) {
		containerRepository.deleteById(id);
		
	}

	public void delete(Container entity) {
		containerRepository.delete(entity);
		
	}
	
	public Optional<Container> findById(long id)
	{
		return containerRepository.findById(id);
	}

}
