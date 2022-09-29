# ajudame-backend

Back-end do projeto Ajuda-me

# Requesitos para o sistema

## Ajuda-me (back-end)

O sistema vai existir para ajudar ONGs ou Pessoas com missão de de ajudar com doações ou casos ou eventos beneficentes.

#### exemplos de casos de uso

- ONGs de ajuda a animais de rua.
- ONGs que estão organizando evento beneficente e precisa de auxílio na material, descrito na ocorrência.

As ajudas nunca serão enviadas pelo sistema mas a intenção de ajudar. A partir dos dados as ONGs poderam entrar em contato e combinar e finalizar a ajuda.

### Requesitos levantados

- [ ] Organização ou Pessoa deve poder se cadastrar

- [ ] Todos os dados devem ser informados

* Título da entidade ONGs ou Pessoa
* E-mail
* WhatsApp
* Cidade
* Estado
* Senha ( apenas para usuários que querem criar casos/eventos.)

- [ ] Ao concluir o cadastro deve enviar por e-mail um ID unico gerado internamente para login.

- [ ] Deve ser possível o cadastro de caso/evento

* Título
* Descrição
* Valor do caso
* Data de ocorrência
* Finalizado S/N

- [ ] Cada caso/evento pode receber de outro usuario a intenção de ajudar.

- [ ] Deve ser disponibilizada uma listagem pública com os casos.

* Caso/Evento
* Entidade que deseja ajudar de alguma forma.

- [ ] Na página pública deve ter uma pesquisa por:

- - [ ] Cidade
- - [ ] Estado
- - [ ] Tipo do evento (Ajuda animal, Ajuda Humanitária)

- [ ] A ajuda pode vir de qualquer entidade, pessoa ou empresa.

- [ ] Ao decidir ajudar o sistema deve informar seus dados

* Nome
* WhatsApp
* E-mail

* [ ] Ao vincular a ajuda ao evento salvar os dados de quem pretende ajudar numa tabela de possíveis ajudas.
