package teste.pratico.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import teste.pratico.spring.model.Movimentacao;
import teste.pratico.spring.repository.IMovimentacao;


@Service
public class MovimentacaoService {
	
	@Autowired
	private IMovimentacao movimentacaoRepository;

	public List<Movimentacao> findAll() {
		
		return movimentacaoRepository.findAll();
	}

	public <S extends Movimentacao> S save(S entity) {
		return movimentacaoRepository.save(entity);
	}
	
}
