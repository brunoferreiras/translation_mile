import React, { Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { getResources } from '../actions/resource';
import Card from '../components/Card';
import Header from '../components/Header';
import FormSearch from '../containers/FormSearch';

class ListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      numberPartial: 10
    };
  }

  updateResources() {
    this.props.getResources();
  }

  componentDidMount() {
    console.log('DID MOUNT: ');
  }

  incrementPage() {
    this.setState({ page: this.state.page + 1 });
  }

  getPartialResources(resources) {
    return [...resources.slice(0, this.state.page * this.state.numberPartial)];
  }

  renderItem = ({ item }) => <Card resource={item.resource} />;

  render() {
    const { loading, resources } = this.props;
    const resourcesResult = this.getPartialResources(resources);
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Header title="Translations Mile" leftIcon="menu" rightIcon="home" />
        <FormSearch />
        <FlatList
          style={styles.flatlist}
          contentContainerStyle={styles.content}
          data={resourcesResult}
          refreshing={loading}
          onRefresh={() => this.updateResources()}
          onEndReached={() => this.incrementPage()}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Nenhum recurso de tradução encontrado!
            </Text>
          )}
          keyExtractor={(item, index) =>
            `${item.resource.resource_id}_${index}`
          }
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1
  },
  container: {
    flexGrow: 1
  },
  content: {
    marginTop: 10,
    paddingBottom: 20,
    alignSelf: 'stretch'
  },
  emptyText: {
    marginTop: 15,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {
    resources: state.resource.resources,
    loading: state.resource.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getResources: () => dispatch(getResources())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);
