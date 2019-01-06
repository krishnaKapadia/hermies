import * as React from 'react';
import './style.css';

interface IProps {
  title?: string;
  footer?: any;
}

export class Base extends React.Component<IProps> {

  constructor(props: IProps){
    super(props);
  }

  public render() {

    return(
      <section className="card">
        <section className="content">
          {
            this.props.title &&
            <div className="title">
              <h1 className="card-title">{this.props.title}</h1>
            </div>
          }

          <div className="subsection">
            {this.props.children}
          </div>
        </section>

        {
          this.props.footer &&
          <section className="footer">
            {this.props.footer}
          </section>
      }
      </section>
    );
  }

}